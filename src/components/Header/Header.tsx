import ThemeToggler from '../ThemeToggler/ThemeToggler';

function Header() {
	return (
		<div className='flex justify-center w-full border-4 header'>
			<h1 className='block '>Portfolio de Chris Berlant</h1>
			<ThemeToggler />
		</div>
	);
}

export default Header;
