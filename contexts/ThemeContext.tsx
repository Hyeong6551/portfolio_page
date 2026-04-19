import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 테마 관리 Provider (localStorage + 시스템 설정 반영)
export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>('light');
    const [mounted, setMounted] = useState(false);

    // 초기 테마 로드 (localStorage > 시스템 설정)
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme | null;

        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(prefersDark ? 'dark' : 'light');
        }

        setMounted(true);
    }, []);

    // 테마 변경 시 localStorage 저장 + HTML 클래스 적용
    useEffect(() => {
        if (mounted) {
            localStorage.setItem('theme', theme);

            switch (theme) {
                case 'dark': document.documentElement.classList.add('dark'); break;
                default: document.documentElement.classList.remove('dark'); break;
            }
        }
    }, [theme, mounted]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
}