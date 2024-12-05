import { useEffect, useState } from 'react';
import Button from './ui/button';

interface NavButtonProps {
	link: string;
	text: string;
}

export default function NavButton({ link, text }: NavButtonProps) {
	const [currentUrl, setCurrentUrl] = useState<string | null>(null);

	useEffect(() => {
		setCurrentUrl(window.location.pathname);
	}, []);

	return (
		<Button
			variant='linkHover2'
			className={
				currentUrl === link || currentUrl === `${link}/`
					? 'font-bold'
					: ''
			}
			asChild
		>
			<a href={link}>{text}</a>
		</Button>
	);
}
