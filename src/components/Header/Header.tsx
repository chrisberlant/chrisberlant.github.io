import ProfileLinks from './ProfileLinks/ProfileLinks';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import Description from './Description/Description';
import { forwardRef } from 'react';

const Header = forwardRef(
	(_, ref: React.ForwardedRef<HTMLDivElement | null>) => {
		return (
			<header ref={ref} className='flex flex-col text-center'>
				<div className='pt-6 font-robotoMono flex flex-col h-48 min-[482px]:h-40 sm:h-44 min-[1183px]:h-36 text-2xl sm:text-3xl font-bold'>
					<div className='flex justify-center'>
						<h1 className='mb-4'>Hi I'm Chris!</h1>
						<ThemeToggler />
					</div>
					<Description />
				</div>
				<ProfileLinks />
			</header>
		);
	}
);

export default Header;
