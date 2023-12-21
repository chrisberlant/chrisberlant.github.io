import { Moon, Sun } from 'lucide-react';
import { ThemeProviderContext } from '../ThemeProvider/ThemeProvider';
import { useContext } from 'react';

function ThemeToggler() {
	const { theme, setTheme } = useContext(ThemeProviderContext);

	return (
		<>
			{theme === 'light' ? (
				<Moon
					onClick={() => setTheme('dark')}
					className='ml-auto cursor-pointer'
				/>
			) : (
				<Sun
					onClick={() => setTheme('light')}
					className='ml-auto cursor-pointer '
				/>
			)}
		</>
	);
}

export default ThemeToggler;
