import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { JSDOM } from 'jsdom';
import { projects } from '../src/data/projects.ts';
const total = projects.length;
const analysisCount = projects.filter((project) => project.category === '데이터·분석').length;

const html = fs.readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
function setup(run = true) {
  const dom = new JSDOM(html, { url: 'https://torysaewoo.github.io/', runScripts: 'outside-only' });
  // DOM tests do not render the decorative canvas.
  dom.window.HTMLCanvasElement.prototype.getContext = () => null;
  const { document } = dom.window;
  if (run) {
    // Execute the actual Astro/Vite build output, not a duplicate test implementation.
    for (const script of document.scripts) {
      if (script.src) {
        const path = new URL(script.src).pathname;
        dom.window.eval(fs.readFileSync(new URL(`../dist${path}`, import.meta.url), 'utf8'));
      } else if (script.type === 'module' || !script.type) dom.window.eval(script.textContent);
    }
  }
  const query = (selector) => document.querySelector(selector);
  const visible = () => [...document.querySelectorAll('[data-project]')].filter((card) => !card.hidden);
  const search = (value) => {
    query('#tool-search').value = value;
    query('#tool-search').dispatchEvent(new dom.window.Event('input', { bubbles: true }));
  };
  return { dom, document, query, visible, search };
}

test('all tools, links and closed details work without JavaScript', () => {
  const { document, query, visible } = setup(false);
  assert.equal(visible().length, total);
  assert.equal(query('.catalog-controls').hidden, true);
  assert.equal(document.querySelectorAll('details[open]').length, 0);
  assert.equal(document.querySelectorAll('.project-details').length, total);
  for (const card of visible()) {
    assert.match(card.querySelector('.card-link').href, /^https:\/\//);
    assert.ok(card.querySelector('.detail-content p').textContent.length > 80);
    assert.ok(card.querySelector('.card-summary').textContent.length <= 65);
    assert.ok(card.querySelector('h3').textContent.length <= 24);
    const path = new URL(card.querySelector('img').src).pathname;
    assert.ok(fs.existsSync(new URL(`../dist${path}`, import.meta.url)), path);
  }
  assert.equal(new Set(projects.map((project) => project.id)).size, total);
  assert.ok(projects.filter((project) => project.featured).length <= 3);
  for (const project of projects) {
    const card = query('[data-project="' + project.id + '"]');
    assert.ok(card, project.id);
    assert.equal(card.querySelector('.detail-content > p').textContent, project.description);
    assert.equal(card.querySelector('.card-link').href, project.live ?? project.repo);
  }
  const ids = [...document.querySelectorAll('[id]')].map((element) => element.id);
  assert.equal(new Set(ids).size, ids.length);
});

test('initial page has three curated shortcuts and all tools', () => {
  const { document, query, visible } = setup();
  assert.equal(query('.catalog-controls').hidden, false);
  assert.equal(visible().length, total);
  assert.deepEqual([...document.querySelectorAll('.quick-card strong')].map((el) => el.textContent), ['FEM 아카데미', 'Shape Index', 'Claude Code 실습']);
  assert.equal(query('#empty-state').hidden, true);
  assert.equal(query('#result-count').textContent, `${total}개 프로젝트`);
});

test('search is case-insensitive, trims whitespace and combines words', () => {
  const { query, search, visible } = setup();
  search('  SHAPE   index  ');
  assert.deepEqual(visible().map((card) => card.dataset.project), ['shape-index-explained']);
  assert.equal(query('#featured').hidden, true);
  assert.equal(query('#result-count').textContent, `${total}개 중 1개`);
  search('ＡＢＡＱＵＳ');
  assert.deepEqual(visible().map((card) => card.dataset.project), ['fem-academy']);
});

test('category and search intersect; clear preserves category', () => {
  const { query, search, visible } = setup();
  query('[data-filter="데이터·분석"]').click();
  assert.equal(visible().length, analysisCount);
  assert.equal(query('[data-filter="데이터·분석"]').getAttribute('aria-pressed'), 'true');
  search('주가');
  assert.deepEqual(visible().map((card) => card.dataset.project), ['stock-chart-analysis']);
  query('#clear-search').click();
  assert.equal(visible().length, analysisCount);
  assert.equal(query('#tool-search').value, '');
});

test('no results resets query, category, count, shortcuts and focus', () => {
  const { query, search, visible, document } = setup();
  query('[data-filter="게임·실험"]').click();
  search('찾을수없는도구');
  assert.equal(visible().length, 0);
  assert.equal(query('#empty-state').hidden, false);
  query('#reset-filters').click();
  assert.equal(visible().length, total);
  assert.equal(query('#featured').hidden, false);
  assert.equal(query('#empty-state').hidden, true);
  assert.equal(query('[data-filter="all"]').getAttribute('aria-pressed'), 'true');
  assert.equal(document.activeElement, query('#tool-search'));
});

test('details open and close without losing content or navigating', () => {
  const { query } = setup();
  const details = query('[data-project="fem-academy"] details');
  const description = details.textContent;
  details.querySelector('summary').click();
  assert.equal(details.open, true);
  assert.match(details.textContent, /Abaqus/);
  details.querySelector('summary').click();
  assert.equal(details.open, false);
  assert.equal(details.textContent, description);
});

test('all category filters show their announced count and unique selection', () => {
  const { document, query, visible } = setup();
  for (const button of document.querySelectorAll('[data-filter]')) {
    button.click();
    assert.equal(visible().length, Number(button.querySelector('span').textContent));
    assert.equal(document.querySelectorAll('[data-filter][aria-pressed="true"]').length, 1);
    assert.equal(query('#empty-state').hidden, true);
  }
});


test('cards expose one native project link and independent disclosure', () => {
  const { document, visible } = setup(false);
  assert.equal(document.querySelectorAll('.brand, .brand-mark, .site-header, .marquee').length, 0);
  assert.doesNotMatch(document.body.textContent, /도구|TYPESCRIPT✦/);
  for (const card of visible()) {
    const link = card.querySelector('.card-link');
    const details = card.querySelector('details');
    assert.equal(card.querySelectorAll('.card-link').length, 1);
    assert.equal(link.target, '_blank');
    assert.ok(link.rel.includes('noopener'));
    assert.equal(link.contains(details), false);
    assert.equal(details.closest('a'), null);
    assert.equal(card.querySelectorAll('.btn, button, a a').length, 0);
    assert.ok(card.querySelector('img').src.endsWith('-cover.svg'));
    link.focus();
    assert.equal(document.activeElement, link);
    details.querySelector('summary').click();
    assert.equal(details.open, true);
  }
});
