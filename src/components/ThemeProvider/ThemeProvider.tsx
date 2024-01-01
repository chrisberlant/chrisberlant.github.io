import { createContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

type ThemeProviderProps = {
	children: React.ReactNode;
	storageKey?: string;
};

type ThemeProviderState = {
	theme: Theme;
	toggleTheme: () => void;
};

const initialState: ThemeProviderState = {
	theme: 'dark',
	toggleTheme: () => null,
};

export const ThemeProviderContext = createContext(initialState);

function ThemeProvider({ children, storageKey = 'theme' }: ThemeProviderProps) {
	const [theme, setTheme] = useState<Theme>(
		() => (localStorage.getItem(storageKey) as Theme) || 'dark'
	);

	function toggleTheme() {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(newTheme);
		localStorage.setItem(storageKey, newTheme);
	}

	useEffect(() => {
		document.body.className = theme;
	}, [theme]);

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
