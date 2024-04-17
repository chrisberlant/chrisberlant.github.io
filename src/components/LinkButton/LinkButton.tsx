import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@lib/utils';

const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
	{
		variants: {
			variant: {
				default:
					'bg-primary text-primary-foreground hover:bg-primary/80',
				outline:
					'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
				secondary:
					'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				link: 'text-primary underline-offset-4 hover:underline',
				github: 'text-white bg-gray-500 hover:bg-gray-600',
				githubProject: 'text-white bg-gray-500 hover:bg-gray-600',
				linkedin: 'text-white bg-blue-600 hover:bg-blue-700',
				youtube: 'text-white bg-red-600 hover:bg-red-700',
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9 px-3',
				lg: 'h-11 px-8',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

const logoVariants = cva('', {
	variants: {
		variant: {
			default: 'mr-2 size-4',
			outline: '',
			secondary: '',
			link: '',
			github: 'mr-2 size-5',
			githubProject: 'mr-2 size-4',
			linkedin: 'mr-1 size-7',
			youtube: 'mr-2 size-7',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});

interface LinkButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	text: string;
	logo?: string;
	logoAlt?: string;
	link?: string;
}

export default function LinkButton({
	className,
	variant,
	size,
	text,
	logo,
	logoAlt = '',
	link,
	...props
}: LinkButtonProps) {
	const handleClick = () => {
		if (link) {
			const linkUrl = new URL(link);
			window.open(linkUrl);
		}
	};
	return (
		<button
			className={cn(
				'animate-fade-in',
				buttonVariants({ variant, size, className })
			)}
			onClick={handleClick}
			{...props}
		>
			{logo && (
				<img
					src={logo}
					className={cn(logoVariants({ variant }))}
					alt={logoAlt}
				/>
			)}
			{text}
		</button>
	);
}
