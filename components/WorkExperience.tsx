import { WorkExperience as WorkExperienceType } from '../data/resume';

interface Props {
    experiences: WorkExperienceType[];
}

export default function WorkExperience({ experiences }: Props) {
    return (
        <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
                Work Experience
            </h2>

            <div className="space-y-4">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6
                                   hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="flex justify-between items-start mb-1">
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                {exp.company}
                            </h3>
                            <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-4">
                                {exp.startDate} - {exp.endDate}
                            </span>
                        </div>
                        <p className="text-blue-600 dark:text-blue-400 text-sm mb-4">
                            {exp.position}
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            {exp.description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}