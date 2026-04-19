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
        slug: "msa-lms-project",
        title: "MSA 기반 학습관리시스템 (LMS)",
        description: "마이크로서비스 아키텍처 기반의 확장 가능한 학습 관리 플랫폼",
        details: "Spring Cloud를 활용한 MSA 아키텍처로 구현된 엔터프라이즈급 학습 관리 시스템입니다. 강의 관리, 시험, 채팅, 리뷰 등 각 도메인을 독립적인 서비스로 분리하여 확장성과 유지보수성을 높였습니다. Eureka 서비스 디스커버리, Spring Cloud Gateway API 라우팅, Redis 캐싱, JWT 인증 등 MSA의 핵심 패턴을 적용했으며, React + TypeScript 기반의 현대적인 프론트엔드를 구축했습니다.",
        skillStack: ["Java", "Spring Boot", "Spring Cloud", "React", "TypeScript", "Material-UI", "Vite", "MySQL", "Redis", "Eureka", "Docker", "Nginx", "JWT"],
        developmentPeriod: "2024.04 ~ 2024.05",
        task: [
            "MSA 아키텍처 설계 및 독립적인 마이크로서비스 구축",
            "Spring Cloud Gateway를 활용한 API 라우팅 및 JWT 인증/인가 처리",
            "강의 관리 시스템 (CRUD, 수강 신청, 좋아요, Q&A, 리뷰)",
            "시험 관리 및 자동 채점 시스템, AI 채팅 봇 연동",
            "파일 업로드 기능, SMS 알림 발송 시스템 구현",
            "React + TypeScript + Vite 기반 SPA 개발 (Material-UI)",
            "Docker 컨테이너화, Nginx 리버스 프록시 설정, AWS 배포"
        ],
        githubUrl: "https://github.com/Hyeong6551/MSA_LMS_projects",
        demoUrl: "https://youtu.be/HRSy0bXYzL4"
    },
    {
        slug: "travel-package-platform",
        title: "MSA 기반 여행 패키지 예약 플랫폼",
        description: "Vue.js와 Spring Boot MSA로 구현한 여행 예약 서비스",
        details: "마이크로서비스 아키텍처로 설계된 여행 패키지 예약 플랫폼입니다. 사용자는 여행 상품을 검색하고 예약할 수 있으며, 관리자는 상품과 회원을 관리할 수 있습니다. Spring Cloud Gateway와 Eureka를 통한 서비스 디스커버리, JWT 인터셉터 기반 인증, Vue.js Composition API를 활용한 반응형 UI가 특징입니다.",
        skillStack: ["Vue.js", "Composition API", "Bootstrap 5", "Spring Boot", "MyBatis", "H2 Database", "Spring Cloud Gateway", "Eureka", "JWT"],
        developmentPeriod: "2025.03 ~ 2025.04",
        task: [
            "MSA 아키텍처 설계 및 마이크로서비스 간 통신 구현",
            "Vue.js Composition API 기반 SPA 개발 (검색, 정렬, 실시간 금액 계산)",
            "Spring Cloud Gateway JWT Interceptor 인증/인가 처리",
            "여행 상품 CRUD, 예약 및 결제 플로우 구현",
            "관리자 대시보드 개발 (회원 관리, 상품 관리, 공지사항)",
            "MyBatis 동적 쿼리 작성, Bootstrap 5 반응형 디자인"
        ],
        githubUrl: "https://github.com/Hyeong6551/project-travel",
        demoUrl: "https://youtu.be/kbE0Xgdu3rc"
    },
    {
        slug: "portfolio-website",
        title: "개인 포트폴리오 웹사이트",
        description: "Next.js와 TypeScript로 제작한 반응형 포트폴리오 사이트",
        details: "SSR, 다크모드, 접근성을 고려한 개인 포트폴리오 웹사이트입니다. Next.js Pages Router를 활용한 정적 생성으로 빠른 로딩 속도를 제공하며, Tailwind CSS로 반응형 디자인과 다크모드를 구현했습니다. 웹 접근성을 준수하고, Layout 컴포넌트 패턴을 적용하여 유지보수성을 높였습니다.",
        skillStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        developmentPeriod: "2026.01 ~ 2026.04",
        task: [
            "Next.js Pages Router를 활용한 SSR 및 정적 생성 구현",
            "Tailwind CSS로 반응형 디자인 및 다크모드 구현",
            "ThemeContext 패턴으로 테마 상태 관리, FOUC 방지 처리",
            "웹 접근성 개선 (Skip to content, ARIA 레이블, 시맨틱 HTML)",
            "Layout 컴포넌트 패턴 적용, 이미지 최적화"
        ],
        githubUrl: "https://github.com/hyeong6551/my-portfolio"
    }
]
