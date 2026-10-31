import { mkdir, writeFile } from 'node:fs/promises';

// Quiet 16:9 diagrams share the catalogue's colour and spacing system.
const palette = { bg: '#151c24', line: '#9ac7ef', faint: '#354a5d', panel: '#1d2935' };
const frame = (drawing) => `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360"><rect width="640" height="360" fill="${palette.bg}"/><g fill="none" stroke="${palette.line}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${drawing}</g></svg>`;
const covers = {};
let surface = '';
for (let axis = 0; axis < 2; axis++) {
  for (let i = 0; i <= 12; i++) {
    const points = [];
    for (let j = 0; j <= 32; j++) {
      const u = (i - 6) / 6, v = (j - 16) / 16;
      const x = axis ? u : v, y = axis ? v : u;
      points.push(`${(320 + 100 * (x - y)).toFixed(1)},${(180 + 44 * (x + y) - 60 * (x * x - y * y)).toFixed(1)}`);
    }
    surface += `<polyline points="${points.join(' ')}" stroke-width="1.8"/>`;
  }
}
covers['shape-index-explained'] = surface;
covers['youtube-quiz'] = '<rect x="190" y="62" width="260" height="236" rx="12" stroke="#354a5d"/><path d="M226 88v184" stroke="#354a5d"/>' + [[1, 104], [3, 148], [0, 192], [2, 236]].map(([filled, y]) => [0, 1, 2, 3].map((i) => `<ellipse cx="${264 + i * 46}" cy="${y + 8}" rx="11" ry="15"${i === filled ? ' fill="#9ac7ef"' : ' stroke="#354a5d"'}/>`).join('')).join('');
covers['claude-code-lab'] = '<rect x="140" y="78" width="360" height="204" rx="16" stroke="#354a5d"/><path d="M140 122h360" stroke="#354a5d"/><circle cx="164" cy="100" r="3"/><circle cx="180" cy="100" r="3"/><path d="m190 166 26 22-26 22m48 0h44"/><path d="m392 159 9 30 30 9-30 9-9 30-9-30-30-9 30-9z" fill="#1d2935"/>';
covers['mixlab-flx4'] = '<rect x="110" y="90" width="420" height="180" rx="20" stroke="#354a5d"/><circle cx="215" cy="180" r="56"/><circle cx="215" cy="180" r="18" stroke="#354a5d"/><circle cx="425" cy="180" r="56"/><circle cx="425" cy="180" r="18" stroke="#354a5d"/><path d="M304 126v108m32-108v108" stroke="#354a5d"/><path d="M294 156h20m12 48h20" stroke-width="7"/>';
covers['fem-academy'] = '<path d="M130 260 210 110 320 95 420 130 510 260zM130 260l140-55 50-110 55 110 135 55M210 110l60 95h105l45-75M270 205l50 55 55-55M210 110l110 150 100-130" stroke-width="2"/><g fill="#9ac7ef" stroke="none"><circle cx="130" cy="260" r="5"/><circle cx="210" cy="110" r="5"/><circle cx="320" cy="95" r="5"/><circle cx="420" cy="130" r="5"/><circle cx="510" cy="260" r="5"/><circle cx="270" cy="205" r="5"/><circle cx="375" cy="205" r="5"/><circle cx="320" cy="260" r="5"/></g>';
covers['youtube-notes'] = '<rect x="142" y="95" width="232" height="166" rx="14" stroke="#354a5d"/><path d="m229 143 58 35-58 35z" fill="#1d2935"/><rect x="348" y="70" width="146" height="220" rx="13" fill="#151c24"/><path d="m370 115 8 8 14-16m12 9h63m-97 49 8 8 14-16m12 9h63m-97 49h97" stroke-width="3"/>';
covers['stock-chart-analysis'] = '<path d="M130 80v200h390M130 180h390M130 130h390M130 230h390" stroke="#354a5d"/><path d="M185 192v60m60-112v85m60-62v80m60-121v78m60-122v75m60-53v60"/><g fill="#1d2935"><rect x="176" y="207" width="18" height="30"/><rect x="236" y="158" width="18" height="45"/><rect x="296" y="180" width="18" height="45"/><rect x="356" y="134" width="18" height="45"/><rect x="416" y="94" width="18" height="40"/><rect x="476" y="116" width="18" height="31"/></g>';
covers['threads-choi-archive'] = '<rect x="160" y="72" width="320" height="216" rx="14" stroke="#354a5d"/><path d="M190 110h150m-150 45h260m-260 30h190m-190 30h260m-260 30h150"/><rect x="386" y="94" width="64" height="33" rx="6" fill="#1d2935" stroke="#354a5d"/>';
covers['block10-tetris'] = '<g stroke="#354a5d"><rect x="186" y="78" width="268" height="216" rx="10"/></g>' + [[0,3],[1,3],[2,3],[3,3],[4,3],[0,2],[1,2],[3,2],[4,2],[4,1],[1,0],[2,0],[3,0],[2,1]].map(([x,y])=>`<rect x="${211+x*44}" y="${100+y*44}" width="36" height="36" rx="5" fill="#1d2935"/>`).join('');
covers['duino-elegies'] = '<path d="M160 110q80-35 160 10 80-45 160-10v155q-80-35-160 10-80-45-160-10zM320 120v155"/><path d="M194 151q44-10 90 8m-90 27q44-10 90 8m-90 27q44-10 90 8m72-70q44-18 90-8m-90 43q44-18 90-8m-90 43q44-18 90-8" stroke="#354a5d"/><path d="m320 47 5 15 15 5-15 5-5 15-5-15-15-5 15-5z" fill="#9ac7ef" stroke="none"/>';
covers['html-effectiveness-kr'] = '<rect x="128" y="84" width="384" height="192" rx="14" stroke="#354a5d"/><path d="m258 138-48 42 48 42m124-84 48 42-48 42m-45-105-34 126" stroke-width="5"/>';
covers['richrichrich'] = '<path d="M140 270h360M170 270V155h85v115m28 0V95h85v175m28 0V175h70v95"/><path d="M192 180h40m-40 28h40m-40 28h40m75-115h37m-37 30h37m-37 30h37m-37 30h37m-37 30h37m73-37h27m-27 30h27" stroke="#354a5d"/>';
covers['earth-sim'] = '<circle cx="320" cy="180" r="112"/><ellipse cx="320" cy="180" rx="55" ry="112" stroke="#354a5d"/><ellipse cx="320" cy="180" rx="112" ry="48" stroke="#354a5d"/><path d="M208 180h224M320 68v224" stroke="#354a5d"/><path d="m243 114 36 13 7 32 32 12-8 31-22 6-8 44-21-28-6-35-24-16zm112-17 36 20 9 30-21 22-26-14-16-32z" fill="#1d2935" stroke-width="2"/>';

await mkdir('public/thumbs', { recursive: true });
for (const [id, drawing] of Object.entries(covers)) {
  await writeFile(`public/thumbs/${id}-cover.svg`, frame(drawing));
}
console.log(`Generated ${Object.keys(covers).length} simple covers.`);
