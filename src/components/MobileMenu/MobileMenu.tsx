import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuGroup,
} from '@/components/ui/DropDownMenu';
import { MenuIcon, WrenchIcon, FolderIcon, UserIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

export default function MobileMenu() {
	return (
		<nav className='fixed right-6 bottom-4 lg:hidden'>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant='outline' size='sm' className='bg-popover'>
						<MenuIcon />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuGroup>
						<Link to='/'>
							<DropdownMenuItem className='cursor-pointer hover:bg-accent'>
								<UserIcon className='mr-2 size-4' />
								About me
							</DropdownMenuItem>
						</Link>
						<Link to='/tools'>
							<DropdownMenuItem className='cursor-pointer hover:bg-accent'>
								<WrenchIcon className='mr-2 size-4' />
								My tools
							</DropdownMenuItem>
						</Link>
						<Link to='/projects'>
							<DropdownMenuItem className='cursor-pointer hover:bg-accent'>
								<FolderIcon className='mr-2 size-4' />
								My projects
							</DropdownMenuItem>
						</Link>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</nav>
	);
}
