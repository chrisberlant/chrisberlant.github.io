import { createContext, useState } from 'react';

type Theme = 'dark' | 'light';

type ThemeProviderState = {
	theme: Theme;
	toggleTheme: () => void;
};

const initialState: ThemeProviderState = {
	theme: window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light',
	toggleTheme: () => null,
};

export const ThemeProviderContext = createContext(initialState);

function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme>(initialState.theme);

	const toggleTheme = () => {
		theme === 'dark' ? setTheme('light') : setTheme('dark');
	};

	const value = {
		theme,
		toggleTheme,
	};

	return (
		<ThemeProviderContext.Provider value={value}>
			{children}
		</ThemeProviderContext.Provider>
	);
}

export default ThemeProvider;
