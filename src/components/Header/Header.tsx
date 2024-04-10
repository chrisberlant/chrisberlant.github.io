import ProfileLinks from './ProfileLinks/ProfileLinks';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import Description from './Description/Description';
import { forwardRef } from 'react';

const Header = forwardRef(
	(_, ref: React.ForwardedRef<HTMLDivElement | null>) => {
		return (
			<header ref={ref} className='flex flex-col text-center'>
				<div className=' justify-center font-robotoMono flex flex-col h-44 min-[529px]:h-36 sm:h-48 min-[661px]:h-40 min-[1166px]:h-32 text-2xl sm:text-3xl font-bold'>
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
