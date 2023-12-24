import { Moon, Sun } from 'lucide-react';
import { ThemeProviderContext } from '../ThemeProvider/ThemeProvider';
import { useContext } from 'react';

function ThemeToggler() {
	const { theme, toggleTheme } = useContext(ThemeProviderContext);

	return (
		<>
			{theme === 'light' ? (
				<Sun onClick={toggleTheme} className='ml-auto cursor-pointer' />
			) : (
				<Moon
					onClick={toggleTheme}
					className='ml-auto cursor-pointer'
				/>
			)}
		</>
	);
}

export default ThemeToggler;
