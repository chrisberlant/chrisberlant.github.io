import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';

export default function NavBar() {
	return (
		<nav className='flex justify-end gap-4 mt-6 mr-2 md:mr-10 lg:gap-8 xl:mr-32 animate-slide-from-top'>
			<NavLink
				to='/'
				className={({ isActive }) => (isActive ? 'font-bold' : '')}
			>
				{({ isActive }) => (
					<Button
						variant='link'
						className={isActive ? 'font-bold' : ''}
					>
						About me
					</Button>
				)}
			</NavLink>
			<NavLink
				to='/tools'
				className={({ isActive }) => (isActive ? 'font-bold' : '')}
			>
				{({ isActive }) => (
					<Button
						variant='link'
						className={isActive ? 'font-bold' : ''}
					>
						My tools
					</Button>
				)}
			</NavLink>
			<NavLink
				to='/projects'
				className={({ isActive }) => (isActive ? 'font-bold' : '')}
			>
				{({ isActive }) => (
					<Button
						variant='link'
						className={isActive ? 'font-bold' : ''}
					>
						My projects
					</Button>
				)}
			</NavLink>
		</nav>
	);
}
