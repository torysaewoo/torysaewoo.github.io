// 프로젝트 카드 데이터 — 새 프로젝트를 추가할 때 여기에 항목 하나만 추가하면 된다.
// summary는 "어떤 질문/불편 → 뭘 할 수 있는가" 순서로 쓴다. useFor는 카드의 "💡 이럴 때" 한 줄.
export type Category = '데이터·분석' | '시뮬레이션' | '생활 도구' | '실험';

export interface Project {
  title: string;
  /** 효용 우선: ① 어떤 질문/불편에서 출발 ② 이걸로 뭘 할 수 있는가 */
  summary: string;
  /** "이럴 때 쓰세요" 한 줄 */
  useFor: string;
  category: Category;
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
    title: 'HTML의 불합리한 효과 — 한글판',
    summary:
      'AI 에이전트의 답변이 왜 마크다운이 아니라 HTML이어야 할까? Anthropic의 "The Unreasonable Effectiveness of HTML" 데모 사이트(Apache-2.0)를 한글로 옮긴 학습판. 슬라이드 데크, 칸반 보드, consistent hashing 시뮬레이션 등 자기완결형 HTML 데모 20종을 그대로 체험할 수 있다.',
    useFor: 'AI로 문서·리포트·프로토타입을 만들 때 마크다운 대신 HTML을 쓰는 20가지 패턴 참고서',
    category: '실험',
    tech: ['HTML', 'CSS', 'Vanilla JS', 'SVG', 'Cloudflare Pages'],
    live: 'https://html-effectiveness-kr.pages.dev/',
    thumbnail: 'html-effectiveness-kr.png',
    date: '2026-07',
    featured: true,
  },
  {
    title: 'RichRichRich — 고위공직자 재산·부동산 분석',
    summary:
      '뉴스에 나온 그 의원, 부동산을 진짜 얼마나 갖고 있을까? 10년치 재산공개 6.3만 건(2016–2025)에서 인물 검색 한 번으로 재산 랭킹과 10년 추이, 매매 시그널, 카카오맵 지역 분석까지 확인할 수 있는 대시보드.',
    useFor: '부동산 투자 인사이트 — 정보에 가장 밝은 고위공직자들이 언제, 어디를 사고파는지가 곧 시장 시그널',
    category: '데이터·분석',
    tech: ['Vanilla JS', 'SVG Charts', 'Python', 'Kakao Maps', 'GitHub Pages'],
    live: 'https://richrichrich.pages.dev/',
    thumbnail: 'richrichrich.png',
    date: '2026-07',
    featured: true,
  },
  {
    title: 'Earth — 실시간 지구 시뮬레이션',
    summary:
      '지금 지구 어디에 비가 오고, 그 물은 어디로 흐를까? 실시간 강수 레이더·지진·태양 위치 데이터를 shallow-water 물리 시뮬레이션 위에 얹어, 뉴스 속 기상 이벤트를 한 화면에서 직접 돌려보는 살아있는 지구본.',
    useFor: '태풍·폭우 등 기상 이벤트를 한눈에 파악하고, 지진 발생을 실시간으로 모니터링',
    category: '시뮬레이션',
    tech: ['Three.js', 'TypeScript', 'Vite', 'RainViewer API', 'USGS'],
    live: 'https://earth-sim-cn0.pages.dev/',
    thumbnail: 'earth-sim.png',
    date: '2026-07',
    featured: true,
  },
];
