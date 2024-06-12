import { NavLink } from 'react-router-dom';
import Button from '../../Button/Button';

interface NavButtonProps {
	link: string;
	text: string;
}

export default function NavButton({ link, text }: NavButtonProps) {
	return (
		<NavLink
			to={link}
			className={({ isActive }) => (isActive ? 'font-bold' : '')}
		>
			{({ isActive }) => (
				<Button variant='link' className={isActive ? 'font-bold' : ''}>
					{text}
				</Button>
			)}
		</NavLink>
	);
}
