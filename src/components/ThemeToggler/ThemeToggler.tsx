import { Moon, Sun } from 'lucide-react';
import { ThemeProviderContext } from '../ThemeProvider/ThemeProvider';
import { useContext } from 'react';

function ThemeToggler() {
	const { theme, toggleTheme } = useContext(ThemeProviderContext);

	return (
		<div className='absolute right-4 top-5 md:top-8 md:right-8 lg:top-8 lg:right-20'>
			<button
				onClick={toggleTheme}
				className='cursor-pointer animate-slide-from-top hover:scale-110'
				aria-label='Toggle color theme'
			>
				{theme === 'light' ? <Sun /> : <Moon />}
			</button>
		</div>
	);
}

export default ThemeToggler;
