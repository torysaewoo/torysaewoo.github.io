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
    title: 'YouTube 학습 노트 — 옵시디언 밖에서 읽고 체크하는 모바일 뷰어',
    summary:
      '유튜브 플레이리스트에 영상을 넣으면 AI가 옵시디언 학습 노트를 자동 생성하는 파이프라인이 있었지만, 모바일에선 옵시디언을 쓰지 않아 읽을 수 없었다. 노트 48편을 콜아웃·타임스탬프 점프 링크·회상 질문 접기까지 그대로 웹으로 변환해 채널·시리즈별로 정리하고, 학습 진행도(🌑🌗🌕)를 폰에서 탭 한 번으로 바꾸면 Cloudflare KV를 우체통 삼아 PC의 옵시디언 볼트 원본까지 왕복 반영된다. 볼트 수동 수정과 충돌하면 볼트가 이기는 규칙으로 원본을 보호한다.',
    useFor: '이동 중에 학습 노트를 복습하고 진행도를 체크하고 싶을 때 — 앱 없이 링크 하나로',
    category: '생활 도구',
    tech: ['Node.js', 'markdown-it', 'Cloudflare Pages Functions', 'Workers KV', 'PowerShell 동기화'],
    live: 'https://youtube-notes-14m.pages.dev/',
    thumbnail: 'youtube-notes.png',
    date: '2026-07',
    featured: true,
  },
  {
    title: '반도체 3사 기술적 분석 — 매일 예측하는 차트 대시보드',
    summary:
      'SK하이닉스·삼성전자·마이크론 주가를 캔들차트·이동평균·볼린저·RSI·MACD·일목균형표 등 10개 기법으로 읽고, 외국인·기관·개인 수급까지 합산해 단기/중기/장기 방향을 게이지로 예측한다. 과거 250일 소급 검증한 예측 적중률과 기법별 백테스트로 신호의 신뢰도를 스스로 채점하고, 각 기법의 유래·판독법은 클릭 한 번에 팝업으로 열린다. 차트는 라이브러리 없이 캔버스로 직접 렌더링.',
    useFor: '반도체주 매매 전에 기술적 신호들을 한 화면에서 점검하고 싶을 때 — 각 지표가 왜 그렇게 읽히는지 근거까지',
    category: '데이터·분석',
    tech: ['Vanilla JS Canvas', 'Python (yfinance)', '네이버증권 수급 API', '기술적 지표 백테스트', 'Cloudflare Pages'],
    live: 'https://stock-chart-analysis.pages.dev/',
    thumbnail: 'stock-chart-analysis.png',
    date: '2026-07',
    featured: true,
  },
  {
    title: 'Threads 아카이브 — @choi.openai AI 뉴스 자동 요약 대시보드',
    summary:
      '관심 있는 Threads 계정의 새 글을 매번 눌러보지 않고 한눈에 훑고 싶다는 불편에서 출발. 로그인 세션으로 프로필 글과 답글을 하루 2회 자동 수집하고, Claude Code(Sonnet)가 각 글을 GeekNews식 핵심 불릿으로 요약해 누적 대시보드로 쌓는다. 상단 날짜 칩으로 특정 날짜 글만 보기, 최신순·과거순 정렬, 본문·답글 검색을 지원한다.',
    useFor: '특정 인물의 AI 소식을 놓치지 않고 싶을 때 — 요약 불릿만 훑고 필요한 것만 원문으로',
    category: '생활 도구',
    tech: ['Python', 'Playwright', 'Claude Code (Sonnet)', 'Windows 작업 스케줄러', 'Cloudflare Pages'],
    live: 'https://threads-choi-archive.pages.dev/',
    thumbnail: 'threads-choi-archive.png',
    date: '2026-07',
    featured: true,
  },
  {
    title: 'BLOCK /10 — 브라우저 클래식 테트리스',
    summary:
      '설치 없이 브라우저에서 바로 즐기는 10×20 클래식 테트리스. 홀드·하드 드롭·고스트 피스 같은 현대 테트리스 규칙을 갖췄고, 모바일에서는 터치 버튼과 보드 탭·스와이프로 조작할 수 있다. 게임 로직은 vitest 자동 테스트로 검증하며, 최고 점수는 로컬에 저장된다.',
    useFor: '잠깐 머리 식히고 싶을 때 — 데스크톱이든 폰이든 링크 하나로 바로 한 판',
    category: '실험',
    tech: ['Vanilla JS', 'Vite', 'Vitest', 'tetris-engine', 'Cloudflare Pages'],
    live: 'https://block10-tetris.pages.dev/',
    thumbnail: 'block10-tetris.png',
    date: '2026-07',
    featured: true,
  },
  {
    title: '두이노 비가 — 릴케 시를 떠다니며 읽는 명상 게임',
    summary:
      '시집을 끝까지 읽는 게 왜 이렇게 어려울까? 릴케의 『두이노 비가』 10편을 챕터로 옮겨, 별과 파티클이 흐르는 밤하늘을 표류하며 시구를 하나씩 모아 읽는 브라우저 게임. 챕터마다 시의 정서를 반영한 절차적 배경 모티프와 앰비언트 드론 사운드가 함께 바뀐다. 키보드와 터치 모두 지원.',
    useFor: '지친 하루 끝에 5분, 게임패드 대신 시 한 구절 — 소리 켜고 천천히 떠다니며 읽는 디지털 시집',
    category: '실험',
    tech: ['Canvas 2D', 'Web Audio API', 'Vanilla JS', 'Cloudflare Pages'],
    live: 'https://duino-elegies.pages.dev/',
    thumbnail: 'duino-elegies.png',
    date: '2026-07',
    featured: true,
  },
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
