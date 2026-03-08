interface HeaderProps {
    name: string;
    title: string;
    bio: string;
    email: string;
    github?: string;
}

export default function Header({
    name,
    title,
    bio,
    email,
    github,
}: HeaderProps) {
    return (
        <header className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                {name}
            </h1>
            <p className="text-xl text-blue-600 dark:text-blue-400 mt-2">
                {title}
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
                {bio}
            </p>

            <div className="mt-4 flex gap-4">
                <a
                    href={`mailto:${email}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                    {email}
                </a>
                {github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        GitHub
                    </a>
                )}
            </div>
        </header>
    );
}