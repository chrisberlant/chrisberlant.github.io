import ProfileLinks from './ProfileLinks/ProfileLinks';
import { forwardRef } from 'react';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';
import ThemeToggler from '../ThemeToggler/ThemeToggler';

const Header = forwardRef(
	(_, ref: React.ForwardedRef<HTMLDivElement | null>) => {
		return (
			<header ref={ref}>
				<ThemeToggler />
				<nav className='flex justify-end gap-4 mt-8 ml-auto mr-5 lg:gap-8 lg:mr-20 animate-slide-from-top'>
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
				</nav>
				<ProfileLinks />
			</header>
		);
	}
);

export default Header;
