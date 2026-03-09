export interface WorkExperience {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string[];
}

export interface SkillCategory {
    category: string;
    skills: string[];
    color: 'blue' | 'green' | 'yellow' | 'red' | 'purple' | 'pink' | 'orange' | 'gray';
}

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
    bio: "React와 TypeScript를 사용한 웹 개발에 관심이 많은 개발자입니다.",
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
                "Docker, aws를 사용한 서버 관리",
                "(추후에 기술할 예정)"
            ]
        }
    ],
    skillCategory: [
        {
            category: "Frontend",
            skills: ["React", "TypeScript", "Next.js", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
            color: "blue"
        },
        {
            category: "Backend",
            skills: ["Java", "Spring Boot", "Node.js", "JSP"],
            color: "green"
        },
        {
            category: "Database",
            skills: ["MySQL", "Oracle", "SQL"],
            color: "yellow"
        },
        {
            category: "Cloud / DevOps",
            skills: ["AWS", "Docker", "CI/CD"],
            color: "orange"
        },
        {
            category: "Tools",
            skills: ["Git", "GitHub", "VSCode", "Cursor"],
            color: "purple"
        }
    ]
}
