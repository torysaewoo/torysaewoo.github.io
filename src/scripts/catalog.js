/** Search and category filtering without a browser framework. */
export function initCatalog(root) {
  const catalog = root.querySelector('#catalog');
  if (!catalog || catalog.dataset.initialized) return;
  catalog.dataset.initialized = 'true';
  const search = catalog.querySelector('#tool-search');
  const buttons = [...catalog.querySelectorAll('[data-filter]')];
  const cards = [...catalog.querySelectorAll('[data-project]')];
  const count = catalog.querySelector('#result-count');
  const title = catalog.querySelector('#projects-title');
  const empty = catalog.querySelector('#empty-state');
  const featured = catalog.querySelector('#featured');
  const clear = catalog.querySelector('#clear-search');
  let category = 'all';
  const normalize = (text) => text.normalize('NFKC').toLocaleLowerCase('ko').replace(/\s+/g, ' ').trim();
  const searchable = cards.map((card) => normalize(card.dataset.search ?? ''));
  function update() {
    const tokens = normalize(search.value).split(' ').filter(Boolean);
    let visible = 0;
    cards.forEach((card, index) => {
      const matches = (category === 'all' || card.dataset.category === category)
        && tokens.every((token) => searchable[index].includes(token));
      card.hidden = !matches;
      if (matches) visible++;
    });
    const filtered = tokens.length > 0 || category !== 'all';
    count.textContent = filtered ? `${cards.length}개 중 ${visible}개` : `${cards.length}개 프로젝트`;
    title.textContent = filtered ? '검색 결과' : '전체 프로젝트';
    empty.hidden = visible !== 0;
    featured.hidden = filtered;
    clear.hidden = search.value.length === 0;
    buttons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
  }
  search.addEventListener('input', update);
  buttons.forEach((button) => button.addEventListener('click', () => {
    category = button.dataset.filter;
    update();
  }));
  clear.addEventListener('click', () => { search.value = ''; update(); search.focus(); });
  catalog.querySelector('#reset-filters').addEventListener('click', () => {
    category = 'all'; search.value = ''; update(); search.focus();
  });
  catalog.querySelector('.catalog-controls').hidden = false;
  update();
}
