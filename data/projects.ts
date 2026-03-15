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
        slug: "project-1",
        title: "프로젝트명",
        description: "프로젝트 설명",
        details: "상세 설명",
        skillStack: ["React", "TypeScript", "Next.js"],
        developmentPeriod: "2025.01 ~ 2025.03",
        task: [
            "작업 내용 1",
            "작업 내용 2",
            "작업 내용 3"
        ],
        imageUrl: "/images/project.png",
        githubUrl: "https://github.com/hyeong6551/project"
    },
    {
        slug: "project-2",
        title: "프로젝트명",
        description: "프로젝트 설명",
        details: "상세 설명",
        skillStack: ["React", "TypeScript", "Next.js"],
        developmentPeriod: "2025.01 ~ 2025.03",
        task: [
            "작업 내용 1",
            "작업 내용 2",
            "작업 내용 3"
        ],
        imageUrl: "/images/project.png",
        githubUrl: "https://github.com/hyeong6551/project"
    },
    {
        slug: "project-3",
        title: "프로젝트명",
        description: "프로젝트 설명",
        details: "상세 설명",
        skillStack: ["React", "TypeScript", "Next.js"],
        developmentPeriod: "2025.01 ~ 2025.03",
        task: [
            "작업 내용 1",
            "작업 내용 2",
            "작업 내용 3"
        ],
        imageUrl: "/images/project.png",
        githubUrl: "https://github.com/hyeong6551/project"
    }
]
