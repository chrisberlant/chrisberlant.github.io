import { ChevronDownIcon, Slash } from 'lucide-react';
import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
	BreadcrumbPage,
} from '../ui/Breadcrumb';
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu';

interface FooterProps {
	refs: React.MutableRefObject<HTMLDivElement | null>[];
	currentPosition: string;
}

export default function Footer({ refs, currentPosition }: FooterProps) {
	return (
		<Breadcrumb className='mt-8'>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href='/'>Home</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator>
					<Slash />
				</BreadcrumbSeparator>
				<BreadcrumbItem>
					<DropdownMenu>
						<DropdownMenuTrigger className='flex items-center gap-1'>
							Sections
							<ChevronDownIcon />
						</DropdownMenuTrigger>
						<DropdownMenuContent align='start'>
							<DropdownMenuItem
								onClick={() => {
									refs[0].current?.scrollIntoView({
										behavior: 'smooth',
									});
								}}
							>
								<BreadcrumbLink>Top</BreadcrumbLink>
							</DropdownMenuItem>
							<DropdownMenuItem
								onClick={() => {
									refs[1].current?.scrollIntoView({
										behavior: 'smooth',
									});
								}}
							>
								<BreadcrumbLink>Skills</BreadcrumbLink>
							</DropdownMenuItem>
							<DropdownMenuItem
								onClick={() => {
									refs[2].current?.scrollIntoView({
										behavior: 'smooth',
									});
								}}
							>
								<BreadcrumbLink>Projects</BreadcrumbLink>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage>{currentPosition}</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}
