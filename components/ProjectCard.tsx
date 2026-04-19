import Link from 'next/link';
import ProjectImage from '@/components/ProjectImage';
import { Projects } from '@/data/projects';

/**
 * ProjectCard 컴포넌트
 *
 * 프로젝트 목록에서 각 프로젝트를 카드 형태로 표시합니다.
 * 클릭 시 프로젝트 상세 페이지로 이동합니다.
 *
 * @UI구성
 * 1. 썸네일 이미지 (imageUrl이 있으면 표시, 없으면 그라디언트 배경)
 * 2. 프로젝트 제목 + 개발 기간
 * 3. 간단한 설명
 * 4. 기술 스택 배지
 *
 * @인터랙션
 * - hover: 카드 확대 + 그림자 강조
 * - 이미지 hover: 약간 확대 (줌인 효과)
 */
interface Props {
    project: Projects; // 표시할 프로젝트 데이터
}

export default function ProjectCard({ project }: Props) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="block bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden
                 hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
        >
            {/* 썸네일 이미지 영역 */}
            <div className="overflow-hidden">
                <ProjectImage
                    src={project.imageUrl}
                    alt={project.title}
                    heightClass="h-52"
                    letterSizeClass="text-4xl"
                    imageClassName="hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* 프로젝트 정보 영역 */}
            <div className="p-6">
                {/* 제목 + 개발 기간 */}
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-4">
                        {project.developmentPeriod}
                    </span>
                </div>

                {/* 프로젝트 간단 설명 */}
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    {project.description}
                </p>

                {/* 기술 스택 배지 */}
                <div className="flex flex-wrap gap-2 mt-3">
                    {project.skillStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded-full
                         bg-blue-100 dark:bg-blue-900
                         text-blue-800 dark:text-blue-200"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}