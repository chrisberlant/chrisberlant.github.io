import { useContext } from 'react';
import { ThemeProviderContext } from '../ThemeProvider/ThemeProvider';

function Footer() {
	const { theme } = useContext(ThemeProviderContext);

	return (
		<footer className='mt-12 text-xs text-center'>
			Background by{' '}
			{theme === 'light' && (
				<a
					href='https://fr.freepik.com/vecteurs-libre/papier-peint-abstrait-blanc_12059536.htm'
					target='_blank'
				>
					Freepik
				</a>
			)}
			{theme === 'dark' && (
				<a
					href='https://fr.freepik.com/vecteurs-libre/fond-noir-degrade-lignes-ondulees_20254155.htm'
					target='_blank'
				>
					Freepik
				</a>
			)}
		</footer>
	);
}

export default Footer;
