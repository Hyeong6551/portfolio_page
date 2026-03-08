import Head from 'next/head';
import Header from '@/components/Header';
import WorkExperience from '@/components/WorkExperience';
import SkillList from '@/components/SkillList';
import { resumeData } from '@/data/resume';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <>
      <Head>
        <title>{resumeData.name} | {resumeData.title}</title>
        <meta name="description" content={resumeData.bio} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 다크 모드 토글 */}
      <ThemeToggle />

      <main className="min-h-screen px-4 sm:px-6 lg:px-8">
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

          {/* 기술 스택 섹션 */}
          <SkillList skillCategories={resumeData.skillCategory} />
        </div>
      </main >
    </>
  );
}