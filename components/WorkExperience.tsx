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
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                    >
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                            {exp.company}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            {exp.position}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                            {exp.startDate} - {exp.endDate}
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