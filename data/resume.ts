// 경력 정보
export interface WorkExperience {
    company: string;
    position: string;
    startDate: string;      // YYYY.MM
    endDate: string;        // YYYY.MM or "재직중"
    description: string[];
}

// 기술 스택 카테고리
export interface SkillCategory {
    category: string;
    skills: string[];
    color: 'blue' | 'green' | 'yellow' | 'red' | 'purple' | 'pink' | 'orange' | 'gray';
}

// 이력서 데이터
export interface ResumeData {
    name: string;
    title: string;
    bio: string;
    email: string;
    github: string;
    workExperience: WorkExperience[];
    skillCategory: SkillCategory[];
}

export const resumeData: ResumeData = {
    name: "조세형",
    title: "프론트엔드 개발자",
    bio: "일단 만들고, 부딪히고, 될 때까지 개선하는 개발자입니다.",
    email: "tpgud3331@gmail.com",
    github: "https://github.com/hyeong6551",
    workExperience: [
        {
            company: "우신아이티솔루션",
            position: "개발자",
            startDate: "2025.07",
            endDate: "재직중",
            description: [
                "시스템 운영 및 장애 대응, 결함 분석·조치",
                "고객 요구사항 분석을 통한 기능 개선 및 신규 메뉴 개발",
                "지침서·절차서 등 업무 문서의 등록·다운로드 기능 설계·개발",
                "ExtJS 4.2 기반 화면 개발 및 UI/UX 개선"
            ]
        },
        {
            company: "중앙정보처리학원",
            position: "수료",
            startDate: "2024.12.31",
            endDate: "2025.05.30",
            description: [
                "Java, Spring Boot를 사용한 웹 애플리케이션 개발",
                "Docker, AWS를 사용한 서버 배포 및 관리",
                "React, TypeScript를 활용한 프론트엔드 개발 실습",
                "팀 프로젝트를 통한 협업 및 Git 버전 관리 경험"
            ]
        }
    ],
    skillCategory: [
        {
            category: "Frontend",
            skills: ["React", "TypeScript", "Next.js", "ExtJS", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
            color: "blue"
        },
        {
            category: "Backend",
            skills: ["Java", "Spring Boot", "Node.js"],
            color: "green"
        },
        {
            category: "Database",
            skills: ["MySQL", "Oracle", "SQL"],
            color: "yellow"
        },
        {
            category: "Cloud / DevOps",
            skills: ["AWS", "Docker", "CI/CD", "Apache Tomcat"],
            color: "orange"
        },
        {
            category: "Tools",
            skills: ["Eclipse", "VSCode", "Cursor", "Git", "SVN", "Maven"],
            color: "purple"
        }
    ]
}

