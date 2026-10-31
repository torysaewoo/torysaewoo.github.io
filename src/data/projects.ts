// 목록은 짧게, 자세한 설명은 description에 보존합니다. 등록 규칙: PROJECTS.md
export type Category = '학습·해석' | '데이터·분석' | '업무·생활' | '게임·실험';

export interface Project {
  id: string;
  title: string;
  /** 목록용 설명: 한 문장, 65자 이내. */
  summary: string;
  /** 자세히 펼쳤을 때 표시하는 전체 설명. */
  description: string;
  /** 상세 설명에 표시할 사용 상황. */
  useFor: string;
  category: Category;
  tech: string[];
  live?: string;
  repo?: string;
  /** public/thumbs/ 안의 파일명 */
  thumbnail: string;
  thumbnailAlt?: string;
  date: string; // YYYY-MM
  /** 상단 바로가기 순서. 최대 3개, 새 프로젝트에는 기본 생략. */
  featured?: 1 | 2 | 3;
}

export const projects: Project[] = [
  {
    id: 'shape-index-explained',
    title: 'Shape Index',
    summary: '두 방향의 휨을 바꾸며 Smile·원통·Saddle의 차이를 이해합니다.',
    description:
      'Smile·Crying·원통·Saddle은 무엇으로 구분할까? 두 방향의 곡률을 슬라이더로 바꾸며 3D 형상과 단면, Shape Index가 함께 변하는 과정을 살펴본다. 휨의 세기와 형상의 차이, Hessian과 주곡률의 관계, 완전 평면에서 지수가 정의되지 않는 이유를 쉬운 설명과 수식으로 확인한다.',
    useFor: '워페이지 형상 분류의 원리와 Shape Index 계산을 그림으로 이해하고 싶을 때',
    category: '학습·해석',
    tech: ['HTML', 'JavaScript', 'SVG', 'Shape Index', 'Cloudflare Pages'],
    live: 'https://shape-index-explained.pages.dev/',
    thumbnail: 'shape-index-explained.png',
    thumbnailAlt: '두 주곡률로 만든 Smile, 원통, Saddle, Crying 형상 예시',
    date: '2026-10',
    featured: 2,
  },
  {
    id: 'claude-code-lab',
    title: 'Claude Code 실습',
    summary: '터미널이 처음이어도, 메일·문서·보고서 업무에 AI 비서를 활용합니다.',
    description:
      'ChatGPT는 써봤지만 터미널은 처음인 관리자가 Claude Code를 업무 비서로 쓰게 돕는 실습 웹앱. 하네스·도구·스킬·MCP 같은 용어를 "새로 온 비서" 비유와 그림으로 설명하고 퀴즈로 확인한 뒤, 복사해서 바로 붙여넣는 프롬프트로 47개 실습(모듈별 퀴즈와 복습 포함)을 따라간다. 탐색기에서 경로를 복사해 PPT·엑셀·워드를 바로 읽히는 법부터 익히고, Python(win32com)으로 Outlook 메일을 직접 읽어 아침 브리핑과 스레드 요약을 Obsidian 일일노트에 남기고, 회신은 임시보관함 초안까지만 만든다. 상사가 보낸 메일에서 보고 선호 스타일을 학습해 스타일 노트로 만든 뒤, 그 기준으로 보고서 작성 → 상사 관점 빨간펜 리뷰 → 피드백 반영까지 이어지는 학습 루프를 실습하고, Playwright를 MCP로 연결해 arXiv와 제휴 논문 DB에서 반도체 패키징 논문 원문까지 받아 동향을 조사·요약하고, 반복 업무는 /morning-brief·/paper-watch 같은 나만의 명령어로 묶는다.',
    useFor: '메일·자료 정리·보고가 주 업무인 팀장님께 Claude Code를 처음 소개하고 직접 손에 익히게 하고 싶을 때',
    category: '학습·해석',
    tech: ['Vanilla JS', 'Claude Code', 'Obsidian', 'Outlook COM (win32com)', 'Cloudflare Pages'],
    live: 'https://claude-code-lab.pages.dev/',
    thumbnail: 'claude-code-lab.png',
    thumbnailAlt: '프로젝트 실제 화면',
    date: '2026-10',
    featured: 3,
  },
  {
    id: 'mixlab-flx4',
    title: 'MIXLAB',
    summary: '소리와 조작 원리를 직접 체험하며 첫 DJ 믹스를 연습합니다.',
    description:
      'DDJ-FLX4를 샀지만 조작 원리와 연습 방법이 막막한 입문자를 위한 60일 인터랙티브 DJ 교실. 매일 원리 설명 → 움직이는 시연 → 직접 조작 → 해설 문제 → 실제 장비 연습으로 배운다. 합성 하우스 루프 두 곡을 들으며 TEMPO·조그·EQ·필터·Echo·페이더·루프를 조작하고, CUE 경로와 프레이즈를 시각화해 비교한다. 공식 FLX4 배치도에서 버튼 위치를 찾고, 셋의 순서·길이를 설계하거나 자신의 녹음을 로컬로 열어 타임스탬프 메모를 남길 수 있다. 진도와 노트는 브라우저에 저장하며 백업·복원을 지원한다.',
    useFor: '버튼이 소리를 어떻게 바꾸는지 직접 체험하고, 하루씩 강의와 실습으로 첫 믹스를 만들고 싶을 때',
    category: '학습·해석',
    tech: ['React', 'TypeScript', 'Vite', 'Web Audio API', 'Cloudflare Workers'],
    live: 'https://mixlab-flx4.fourweez.workers.dev/',
    thumbnail: 'mixlab-flx4.png',
    thumbnailAlt: '프로젝트 실제 화면',
    date: '2026-10',
  },
  {
    id: 'fem-academy',
    title: 'FEM 아카데미',
    summary: '스프링부터 3D 요소까지, 직접 조작하며 유한요소법을 배웁니다.',
    description:
      '유한요소법(FEM)은 상용툴 버튼만 누르면 결과가 나오지만, 행렬 하나하나가 어디서 왔는지 모르면 결과를 믿을 수 없다. 형상함수 → B 행렬 → 강성행렬 → 경계조건 → 응력의 5단계를 스프링·1D 봉·트러스·보·2D 평면(CST·Q4) 순으로 반복하며, 슬라이더로 숫자를 바꾸고 경계조건을 빼서 행렬을 망가뜨려 보고 강성행렬을 손으로 채워 채점받는다. 브라우저 안에서 Pyodide로 Python·NumPy를 실행해 1D 솔버를 직접 완성하고, 다리 트러스·H형강 보를 설계해 최소 무게에 도전하고, 구멍 뚫린 판의 응력집중계수가 이론값 3으로 수렴하는 것을 확인한다. 마지막 실무 레벨에서는 특이점, 전단·체적 잠김, 모래시계 모드, 단위계 실수를 일부러 만들어 보며 결과를 의심하는 법을 익히고, 3D 솔리드(C3D8·C3D8I)·2차 요소·셸(민들린 판)로 넓힌다. 끝으로 실험실 모델을 Abaqus .inp로 내보내 실제 Abaqus 2025로 돌린 .dat를 올리면 자동 비교·원인 진단하는데, 직접 구현한 솔버(B-bar, 적분점 외삽 포함)가 솔리드·평면·보·트러스 모델에서 Abaqus와 0.03% 이내로 일치한다(셸은 요소 정식화 차이로 0.2%).',
    useFor: 'FEM을 처음 배우거나 Abaqus 결과가 왜 그렇게 나오는지 원리부터 다시 잡고 싶을 때 — 설치 없이 링크 하나로',
    category: '학습·해석',
    tech: ['React + MDX', 'KaTeX', 'Pyodide (브라우저 Python)', 'FEM 솔버 직접 구현', 'Abaqus 검증', 'Cloudflare Pages'],
    live: 'https://fem-academy.pages.dev/',
    thumbnail: 'fem-academy.png',
    thumbnailAlt: '프로젝트 실제 화면',
    date: '2026-10',
    featured: 1,
  },
  {
    id: 'youtube-notes',
    title: 'YouTube 학습 노트',
    summary: '유튜브 학습 노트를 모바일에서 읽고, 진도를 옵시디언과 동기화합니다.',
    description:
      '유튜브 플레이리스트에 영상을 넣으면 AI가 옵시디언 학습 노트를 자동 생성하는 파이프라인이 있었지만, 모바일에선 옵시디언을 쓰지 않아 읽을 수 없었다. 노트 48편을 콜아웃·타임스탬프 점프 링크·회상 질문 접기까지 그대로 웹으로 변환해 채널·시리즈별로 정리하고, 학습 진행도(🌑🌗🌕)를 폰에서 탭 한 번으로 바꾸면 Cloudflare KV를 우체통 삼아 PC의 옵시디언 볼트 원본까지 왕복 반영된다. 볼트 수동 수정과 충돌하면 볼트가 이기는 규칙으로 원본을 보호한다.',
    useFor: '이동 중에 학습 노트를 복습하고 진행도를 체크하고 싶을 때 — 앱 없이 링크 하나로',
    category: '업무·생활',
    tech: ['Node.js', 'markdown-it', 'Cloudflare Pages Functions', 'Workers KV', 'PowerShell 동기화'],
    live: 'https://youtube-notes-14m.pages.dev/',
    thumbnail: 'youtube-notes.png',
    thumbnailAlt: '프로젝트 실제 화면',
    date: '2026-07',
  },
  {
    id: 'stock-chart-analysis',
    title: '반도체 주식 차트',
    summary: '반도체 3사의 주가·수급·기술적 지표를 한 화면에서 비교합니다.',
    description:
      'SK하이닉스·삼성전자·마이크론 주가를 캔들차트·이동평균·볼린저·RSI·MACD·일목균형표 등 10개 기법으로 읽고, 외국인·기관·개인 수급까지 합산해 단기/중기/장기 방향을 게이지로 예측한다. 과거 250일 소급 검증한 예측 적중률과 기법별 백테스트로 신호의 신뢰도를 스스로 채점하고, 각 기법의 유래·판독법은 클릭 한 번에 팝업으로 열린다. 차트는 라이브러리 없이 캔버스로 직접 렌더링.',
    useFor: '반도체주 매매 전에 기술적 신호들을 한 화면에서 점검하고 싶을 때 — 각 지표가 왜 그렇게 읽히는지 근거까지',
    category: '데이터·분석',
    tech: ['Vanilla JS Canvas', 'Python (yfinance)', '네이버증권 수급 API', '기술적 지표 백테스트', 'Cloudflare Pages'],
    live: 'https://stock-chart-analysis.pages.dev/',
    thumbnail: 'stock-chart-analysis.png',
    thumbnailAlt: '프로젝트 실제 화면',
    date: '2026-07',
  },
  {
    id: 'threads-choi-archive',
    title: 'AI 뉴스 아카이브',
    summary: 'Threads의 AI 소식을 요약으로 훑고, 관심 있는 원문을 찾아봅니다.',
    description:
      '관심 있는 Threads 계정의 새 글을 매번 눌러보지 않고 한눈에 훑고 싶다는 불편에서 출발. 로그인 세션으로 프로필 글과 답글을 하루 2회 자동 수집하고, Claude Code(Sonnet)가 각 글을 GeekNews식 핵심 불릿으로 요약해 누적 대시보드로 쌓는다. 상단 날짜 칩으로 특정 날짜 글만 보기, 최신순·과거순 정렬, 본문·답글 검색을 지원한다.',
    useFor: '특정 인물의 AI 소식을 놓치지 않고 싶을 때 — 요약 불릿만 훑고 필요한 것만 원문으로',
    category: '업무·생활',
    tech: ['Python', 'Playwright', 'Claude Code (Sonnet)', 'Windows 작업 스케줄러', 'Cloudflare Pages'],
    live: 'https://threads-choi-archive.pages.dev/',
    thumbnail: 'threads-choi-archive.png',
    thumbnailAlt: '프로젝트 실제 화면',
    date: '2026-07',
  },
  {
    id: 'block10-tetris',
    title: 'BLOCK /10',
    summary: '설치 없이 키보드나 터치로 즐기는 클래식 테트리스입니다.',
    description:
      '설치 없이 브라우저에서 바로 즐기는 10×20 클래식 테트리스. 홀드·하드 드롭·고스트 피스 같은 현대 테트리스 규칙을 갖췄고, 모바일에서는 터치 버튼과 보드 탭·스와이프로 조작할 수 있다. 게임 로직은 vitest 자동 테스트로 검증하며, 최고 점수는 로컬에 저장된다.',
    useFor: '잠깐 머리 식히고 싶을 때 — 데스크톱이든 폰이든 링크 하나로 바로 한 판',
    category: '게임·실험',
    tech: ['Vanilla JS', 'Vite', 'Vitest', 'tetris-engine', 'Cloudflare Pages'],
    live: 'https://block10-tetris.pages.dev/',
    thumbnail: 'block10-tetris.png',
    thumbnailAlt: '프로젝트 실제 화면',
    date: '2026-07',
  },
  {
    id: 'duino-elegies',
    title: '두이노 비가',
    summary: '별과 음악 사이를 떠다니며 릴케의 시를 읽는 명상 게임입니다.',
    description:
      '시집을 끝까지 읽는 게 왜 이렇게 어려울까? 릴케의 『두이노 비가』 10편을 챕터로 옮겨, 별과 파티클이 흐르는 밤하늘을 표류하며 시구를 하나씩 모아 읽는 브라우저 게임. 챕터마다 시의 정서를 반영한 절차적 배경 모티프와 앰비언트 드론 사운드가 함께 바뀐다. 키보드와 터치 모두 지원.',
    useFor: '지친 하루 끝에 5분, 게임패드 대신 시 한 구절 — 소리 켜고 천천히 떠다니며 읽는 디지털 시집',
    category: '게임·실험',
    tech: ['Canvas 2D', 'Web Audio API', 'Vanilla JS', 'Cloudflare Pages'],
    live: 'https://duino-elegies.pages.dev/',
    thumbnail: 'duino-elegies.png',
    thumbnailAlt: '프로젝트 실제 화면',
    date: '2026-07',
  },
  {
    id: 'html-effectiveness-kr',
    title: 'HTML 활용 실험실',
    summary: '문서·도표·시뮬레이션을 HTML로 만드는 20가지 예제를 체험합니다.',
    description:
      'AI 에이전트의 답변이 왜 마크다운이 아니라 HTML이어야 할까? Anthropic의 "The Unreasonable Effectiveness of HTML" 데모 사이트(Apache-2.0)를 한글로 옮긴 학습판. 슬라이드 데크, 칸반 보드, consistent hashing 시뮬레이션 등 자기완결형 HTML 데모 20종을 그대로 체험할 수 있다.',
    useFor: 'AI로 문서·리포트·프로토타입을 만들 때 마크다운 대신 HTML을 쓰는 20가지 패턴 참고서',
    category: '학습·해석',
    tech: ['HTML', 'CSS', 'Vanilla JS', 'SVG', 'Cloudflare Pages'],
    live: 'https://html-effectiveness-kr.pages.dev/',
    thumbnail: 'html-effectiveness-kr.png',
    thumbnailAlt: '프로젝트 실제 화면',
    date: '2026-07',
  },
  {
    id: 'richrichrich',
    title: '공직자 재산 탐색',
    summary: '고위공직자의 재산과 부동산 보유 내역을 검색하고 비교합니다.',
    description:
      '뉴스에 나온 그 의원, 부동산을 진짜 얼마나 갖고 있을까? 10년치 재산공개 6.3만 건(2016–2025)에서 인물 검색 한 번으로 재산 랭킹과 10년 추이, 매매 시그널, 카카오맵 지역 분석까지 확인할 수 있는 대시보드.',
    useFor: '부동산 투자 인사이트 — 정보에 가장 밝은 고위공직자들이 언제, 어디를 사고파는지가 곧 시장 시그널',
    category: '데이터·분석',
    tech: ['Vanilla JS', 'SVG Charts', 'Python', 'Kakao Maps', 'GitHub Pages'],
    live: 'https://richrichrich.pages.dev/',
    thumbnail: 'richrichrich.png',
    thumbnailAlt: '프로젝트 실제 화면',
    date: '2026-07',
  },
  {
    id: 'earth-sim',
    title: '실시간 지구',
    summary: '지구본 위에서 강수·지진·태양의 위치를 함께 살펴봅니다.',
    description:
      '지금 지구 어디에 비가 오고, 그 물은 어디로 흐를까? 실시간 강수 레이더·지진·태양 위치 데이터를 shallow-water 물리 시뮬레이션 위에 얹어, 뉴스 속 기상 이벤트를 한 화면에서 직접 돌려보는 살아있는 지구본.',
    useFor: '태풍·폭우 등 기상 이벤트를 한눈에 파악하고, 지진 발생을 실시간으로 모니터링',
    category: '데이터·분석',
    tech: ['Three.js', 'TypeScript', 'Vite', 'RainViewer API', 'USGS'],
    live: 'https://earth-sim-cn0.pages.dev/',
    thumbnail: 'earth-sim.png',
    thumbnailAlt: '프로젝트 실제 화면',
    date: '2026-07',
  },
];
