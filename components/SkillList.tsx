import { SkillCategory } from '@/data/resume';

interface Props {
    skillCategories: SkillCategory[];
}

const colorMap: Record<SkillCategory['color'], { bg: string; text: string }> = {
    blue: {
        bg: 'bg-blue-100 dark:bg-blue-900',
        text: 'text-blue-800 dark:text-blue-200',
    },
    green: {
        bg: 'bg-green-100 dark:bg-green-900',
        text: 'text-green-800 dark:text-green-200',
    },
    yellow: {
        bg: 'bg-yellow-100 dark:bg-yellow-900',
        text: 'text-yellow-800 dark:text-yellow-200',
    },
    red: {
        bg: 'bg-red-100 dark:bg-red-900',
        text: 'text-red-800 dark:text-red-200',
    },
    purple: {
        bg: 'bg-purple-100 dark:bg-purple-900',
        text: 'text-purple-800 dark:text-purple-200',
    },
    pink: {
        bg: 'bg-pink-100 dark:bg-pink-900',
        text: 'text-pink-800 dark:text-pink-200',
    },
    orange: {
        bg: 'bg-orange-100 dark:bg-orange-900',
        text: 'text-orange-800 dark:text-orange-200',
    },
    gray: {
        bg: 'bg-gray-100 dark:bg-gray-900',
        text: 'text-gray-800 dark:text-gray-200',
    },
};

export default function SkillsList({ skillCategories }: Props) {
    return (
        <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
                Skills
            </h2>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                {skillCategories.map((category, index) => (
                    <div key={index} className="mb-6 last:mb-0">
                        <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                            {category.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, i) => {
                                const colors = colorMap[category.color];
                                return (
                                    <span
                                        key={i}
                                        className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm
                                                    hover:scale-105 transition-transform duration-200 cursor-default`}
                                    >
                                        {skill}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}