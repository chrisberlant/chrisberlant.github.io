import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuGroup,
} from '@/components/ui/dropdown-menu';
import { User, Settings, MenuIcon, TowerControl } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

export default function MobileMenu() {
	return (
		<nav className='flex justify-end mt-4 mr-8'>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant='outline' size='sm'>
						<MenuIcon />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className='bg-background w-28'>
					<DropdownMenuGroup>
						<Link to='/'>
							<DropdownMenuItem className='cursor-pointer hover:bg-accent'>
								<User className='w-4 h-4 mr-2' />
								<span>About me</span>
							</DropdownMenuItem>
						</Link>
						<Link to='/projects'>
							<DropdownMenuItem className='cursor-pointer hover:bg-accent'>
								<Settings className='w-4 h-4 mr-2' />
								My projects
							</DropdownMenuItem>
						</Link>
						<Link to='/tools'>
							<DropdownMenuItem className='cursor-pointer hover:bg-accent'>
								<TowerControl className='w-4 h-4 mr-2' />
								<span>My tools</span>
							</DropdownMenuItem>
						</Link>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</nav>
	);
}
