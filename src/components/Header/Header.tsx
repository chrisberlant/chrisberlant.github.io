import ProfileLinks from './ProfileLinks/ProfileLinks';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';
import ThemeToggler from '../ThemeToggler/ThemeToggler';

export default function Header() {
	return (
		<header>
			<div className='flex items-center justify-center text-2xl'>
				<span className='font-bold text-center animate-slide-from-top'>
					Chris Berlant's Webpage
				</span>
				<ThemeToggler />
			</div>
			<nav className='flex justify-end gap-4 mt-8 mr-2 md:mr-10 lg:gap-8 xl:mr-32 animate-slide-from-top'>
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
			<ProfileLinks />
		</header>
	);
}
