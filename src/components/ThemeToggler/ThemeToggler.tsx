import { Moon, Sun } from 'lucide-react';
import { ThemeProviderContext } from '../ThemeProvider/ThemeProvider';
import { useContext } from 'react';

function ThemeToggler() {
	const { theme, toggleTheme } = useContext(ThemeProviderContext);

	return (
		<div className='absolute top-6 right-6 md:top-8 md:right-8 xl:top-10 xl:right-24'>
			<button
				onClick={toggleTheme}
				className='cursor-pointer animate-slide-from-top hover:scale-110'
			>
				{theme === 'light' ? <Sun /> : <Moon />}
			</button>
		</div>
	);
}

export default ThemeToggler;
