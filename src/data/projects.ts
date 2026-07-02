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
    title: 'Earth — 실시간 지구 시뮬레이션',
    summary:
      '아이코스피어 정점 그래프 위에서 도는 shallow-water 유체 물리 시뮬레이션. 실제 지구 지형에 실시간 강수 레이더·지진·태양 위치를 연동해, 지금 비 오는 곳에 시뮬 속 강이 흐른다.',
    tech: ['Three.js', 'TypeScript', 'Vite', 'RainViewer API', 'USGS'],
    live: 'https://torysaewoo.github.io/earth-sim/',
    repo: 'https://github.com/torysaewoo/earth-sim',
    thumbnail: 'earth-sim.png',
    date: '2026-07',
    featured: true,
  },
];
