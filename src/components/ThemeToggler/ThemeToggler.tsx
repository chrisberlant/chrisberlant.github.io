import { Moon, Sun } from 'lucide-react';
import { ThemeProviderContext } from '../ThemeProvider/ThemeProvider';
import { useContext } from 'react';

function ThemeToggler() {
	const { theme, toggleTheme } = useContext(ThemeProviderContext);

	return (
		<div>
			<button
				onClick={toggleTheme}
				className='ml-auto cursor-pointer animate-slide-from-top hover:scale-110'
			>
				{theme === 'light' ? <Sun /> : <Moon />}
			</button>
		</div>
	);
}

export default ThemeToggler;
