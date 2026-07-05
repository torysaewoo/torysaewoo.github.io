// 프로젝트 카드 데이터 — 새 프로젝트를 추가할 때 여기에 항목 하나만 추가하면 된다.
export interface Project {
  title: string;
  summary: string;
  tech: string[];
  live?: string;
  repo?: string;
  /** public/thumbs/ 안의 파일명 */
  thumbnail: string;
  date: string; // YYYY-MM
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'RichRichRich — 고위공직자 재산·부동산 분석',
    summary:
      '국회 고위공직자 재산공개 10년치(2016–2025, 6.3만 건)를 부동산 관점으로 추적하는 대시보드. 누가 언제 어디의 부동산을 사고팔았는지 — 재산 랭킹, 인물별 10년 추이, 매매 시그널 피드, 지역 분석에 카카오맵 연동까지.',
    tech: ['Vanilla JS', 'SVG Charts', 'Python', 'Kakao Maps', 'GitHub Pages'],
    live: 'https://torysaewoo.github.io/richrichrich/',
    repo: 'https://github.com/torysaewoo/richrichrich',
    thumbnail: 'richrichrich.png',
    date: '2026-07',
    featured: true,
  },
  {
    title: 'Earth — 실시간 지구 시뮬레이션',
    summary:
      '아이코스피어 정점 그래프 위에서 도는 shallow-water 유체 물리 시뮬레이션. 실제 지구 지형에 실시간 강수 레이더·지진·태양 위치를 연동해, 지금 비 오는 곳에 시뮬 속 강이 흐른다.',
    tech: ['Three.js', 'TypeScript', 'Vite', 'RainViewer API', 'USGS'],
    live: 'https://earth-sim-cn0.pages.dev/',
    thumbnail: 'earth-sim.png',
    date: '2026-07',
    featured: true,
  },
];
