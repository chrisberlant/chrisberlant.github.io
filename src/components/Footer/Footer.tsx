import CatppuccinLogo from '@assets/catppuccin-logo.png';

export default function Footer() {
	return (
		<footer className='flex flex-col items-center flex-1 mt-8 text-xs lg:mt-12'>
			<span>
				Web illustrations by{' '}
				<a
					href='https://storyset.com/web'
					target='_blank'
					className='text-xs'
				>
					Storyset
				</a>
			</span>
			<div className='flex items-center mt-1'>
				Theme by
				<a
					href='https://catppuccin.com/'
					target='_blank'
					className='flex items-center ml-1'
				>
					Catppuccin
					<img src={CatppuccinLogo} alt='' className='ml-2 size-6' />
				</a>
			</div>
		</footer>
	);
}
