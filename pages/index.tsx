import Head from 'next/head';
import Header from '@/components/Header';
import WorkExperience from '@/components/WorkExperience';
import SkillList from '@/components/SkillList';
import ProjectCard from '@/components/ProjectCard';
import { resumeData } from '@/data/resume';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <>
      <Head>
        <title>{resumeData.name} | {resumeData.title}</title>
        <meta name="description" content={resumeData.bio} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* 헤더 섹션 */}
          <Header
            name={resumeData.name}
            title={resumeData.title}
            bio={resumeData.bio}
            email={resumeData.email}
            github={resumeData.github}
          />

          {/* 경력 섹션 */}
          <WorkExperience experiences={resumeData.workExperience} />

          {/* 프로젝트 섹션 */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
              Projects
            </h2>
            <div className="space-y-6">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>

          {/* 기술 스택 섹션 */}
          <SkillList skillCategories={resumeData.skillCategory} />
        </div>
      </div>
    </>
  );
}