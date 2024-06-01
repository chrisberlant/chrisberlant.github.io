import ProfileLinks from './ProfileLinks/ProfileLinks';
import { forwardRef } from 'react';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';
import ThemeToggler from '../ThemeToggler/ThemeToggler';

const Header = forwardRef(
	(_, ref: React.ForwardedRef<HTMLDivElement | null>) => {
		return (
			<header ref={ref} className='flex flex-col text-center'>
				<ThemeToggler />
				<nav className='flex gap-8 mt-8 ml-auto mr-20 animate-slide-from-top'>
					<NavLink
						to='/'
						className={({ isActive }) =>
							isActive ? 'font-bold' : ''
						}
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
						to='/projects'
						className={({ isActive }) =>
							isActive ? 'font-bold' : ''
						}
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
					<NavLink
						to='/tools'
						className={({ isActive }) =>
							isActive ? 'font-bold' : ''
						}
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
				</nav>
				<ProfileLinks />
			</header>
		);
	}
);

export default Header;
