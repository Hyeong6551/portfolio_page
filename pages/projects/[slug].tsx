import Head from 'next/head';
import Link from 'next/link';
import ProjectImage from '@/components/ProjectImage';
import { GetStaticPaths, GetStaticProps } from 'next';
import { projects, Projects } from '@/data/projects';

interface Props {
    project: Projects;
}

export default function ProjectDetail({ project }: Props) {
    return (
        <>
            <Head>
                <title>{`${project.title} | 조세형`}</title>
                <meta name="description" content={project.description} />
            </Head>

            <div className="px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto py-8">
                    <Link href="/" className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400
                                       hover:text-blue-800 dark:hover:text-blue-300 transition-colors mb-6">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        홈으로
                    </Link>

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        {/* 이미지 */}
                        <ProjectImage
                            src={project.imageUrl}
                            alt={project.title}
                            heightClass="h-64"
                            letterSizeClass="text-6xl"
                        />

                        <div className="p-8">
                            {/* 제목 + 기간 */}
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                                {project.title}
                            </h1>
                            <p className="text-gray-500 dark:text-gray-400 mt-1">
                                {project.developmentPeriod}
                            </p>

                            {/* 상세 설명 */}
                            <p className="text-gray-700 dark:text-gray-300 mt-6 leading-relaxed">
                                {project.details}
                            </p>

                            <hr className="my-6 border-gray-200 dark:border-gray-700" />

                            {/* 주요 업무 */}
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                    주요 업무
                                </h2>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                    {project.task.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <hr className="my-6 border-gray-200 dark:border-gray-700" />

                            {/* 기술 스택 */}
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                    기술 스택
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {project.skillStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* 링크 */}
                            <div className="mt-6 flex gap-4">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                        </svg>
                                        GitHub
                                    </a>
                                )}
                                {project.demoUrl && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = projects.map((project) => ({
        params: { slug: project.slug },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
    const project = projects.find((p) => p.slug === params?.slug);

    if (!project) {
        return { notFound: true };
    }

    return {
        props: { project },
    };
};
