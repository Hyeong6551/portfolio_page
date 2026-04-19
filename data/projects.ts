/**
 * TODO: 실제 프로젝트 정보로 교체하세요
 *
 * 각 프로젝트마다 다음 정보를 업데이트하세요:
 * - slug: URL에 사용될 고유 식별자 (영문, kebab-case)
 * - title: 프로젝트 제목
 * - description: 한 줄 요약
 * - details: 상세 설명 (2-3문장)
 * - skillStack: 사용한 기술 스택
 * - task: 주요 작업 내용 (3-5개)
 * - imageUrl: 프로젝트 스크린샷 (선택사항)
 * - githubUrl: GitHub 저장소 URL
 * - demoUrl: 배포된 사이트 URL (선택사항)
 */

/* 프로젝트 */
export interface Projects {
    slug: string;           // URL 경로용 (영문, 고유값)
    title: string;
    description: string;
    details: string;
    skillStack: string[];
    developmentPeriod: string;
    task: string[];
    imageUrl?: string;
    githubUrl?: string;
    demoUrl?: string;
}

export const projects: Projects[] = [
    {
        slug: "portfolio-website",
        title: "개인 포트폴리오 웹사이트",
        description: "Next.js와 TypeScript로 제작한 반응형 포트폴리오 사이트",
        details: "SSR, SEO 최적화, 다크모드를 적용한 개인 포트폴리오 웹사이트입니다. Lighthouse 성능 점수 90점 이상을 달성했으며, 완전한 반응형 디자인으로 모든 기기에서 최적화된 경험을 제공합니다.",
        skillStack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
        developmentPeriod: "2026.01 ~ 2026.04",
        task: [
            "Next.js Pages Router를 활용한 SSR 구현",
            "Tailwind CSS로 반응형 디자인 및 다크모드 구현",
            "SEO 최적화 (Open Graph, sitemap, robots.txt)",
            "Lighthouse Performance 90+ 점 달성",
            "웹 접근성 WCAG 2.1 AA 준수"
        ],
        githubUrl: "https://github.com/hyeong6551/my-portfolio"
    },
    {
        slug: "todo-app",
        title: "할 일 관리 애플리케이션",
        description: "React와 TypeScript로 구현한 할 일 관리 앱",
        details: "CRUD 기능을 갖춘 할 일 관리 애플리케이션입니다. localStorage를 활용하여 데이터를 영구 저장하고, 드래그 앤 드롭으로 우선순위를 변경할 수 있습니다. 직관적인 UI/UX로 생산성을 높일 수 있습니다.",
        skillStack: ["React", "TypeScript", "Vite", "CSS Modules"],
        developmentPeriod: "2025.11 ~ 2025.12",
        task: [
            "할 일 추가, 수정, 삭제, 완료 처리 기능 구현",
            "localStorage를 활용한 데이터 영구 저장",
            "드래그 앤 드롭으로 할 일 순서 변경",
            "필터링 및 검색 기능 구현",
            "반응형 디자인 적용"
        ],
        githubUrl: "https://github.com/hyeong6551/todo-app"
    },
    {
        slug: "weather-dashboard",
        title: "날씨 대시보드",
        description: "OpenWeather API를 활용한 실시간 날씨 정보 앱",
        details: "OpenWeather API를 연동하여 실시간 날씨 정보를 제공하는 대시보드입니다. 현재 날씨, 주간 예보, 시간별 예보를 시각적으로 표시하며, 위치 기반으로 정확한 날씨 정보를 제공합니다.",
        skillStack: ["React", "TypeScript", "Recharts", "Axios"],
        developmentPeriod: "2025.09 ~ 2025.10",
        task: [
            "OpenWeather API 연동",
            "현재 날씨 및 예보 정보 시각화",
            "위치 기반 날씨 정보 제공 (Geolocation API)",
            "Recharts 라이브러리를 활용한 데이터 시각화",
            "반응형 대시보드 레이아웃 구현"
        ],
        githubUrl: "https://github.com/hyeong6551/weather-dashboard"
    }
]
