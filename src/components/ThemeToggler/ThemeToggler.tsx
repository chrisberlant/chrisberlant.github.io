import { Moon, Sun } from 'lucide-react';
import { ThemeProviderContext } from '../ThemeProvider/ThemeProvider';
import { useContext } from 'react';

function ThemeToggler() {
	const { theme, setTheme } = useContext(ThemeProviderContext);

	return (
		<div className='flex flex-row w-full border theme-toggler'>
			{theme === 'light' ? (
				<Moon
					onClick={() => setTheme('dark')}
					className='cursor-pointer'
				/>
			) : (
				<Sun
					onClick={() => setTheme('light')}
					className='justify-end cursor-pointer'
				/>
			)}
		</div>
	);
}

export default ThemeToggler;
