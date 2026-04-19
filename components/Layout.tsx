import { ReactNode } from 'react';
import Footer from './Footer';
import ThemeToggle from './ThemeToggle';

// 전체 페이지의 공통 레이아웃
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      {/* 접근성: 본문 바로가기 */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:shadow-lg"
      >
        Skip to content
      </a>

      <ThemeToggle />

      <main id="main-content" className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
}
