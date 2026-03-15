import Link from 'next/link';
import Image from 'next/image';
import { Projects } from '@/data/projects';

interface Props {
    project: Projects;
}

export default function ProjectCard({ project }: Props) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="block bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden
                 hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
        >
            {/* 이미지 영역 */}
            <div className="overflow-hidden">
                {project.imageUrl ? (
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        width={800}
                        height={400}
                        className="w-full h-52 object-cover
                       hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <div className="w-full h-52 bg-gradient-to-br from-blue-400 to-purple-500
                          flex items-center justify-center">
                        <span className="text-white text-4xl font-bold opacity-50">
                            {project.title.charAt(0)}
                        </span>
                    </div>
                )}
            </div>

            {/* 정보 영역 */}
            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-4">
                        {project.developmentPeriod}
                    </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    {project.description}
                </p>

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