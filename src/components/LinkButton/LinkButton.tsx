import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@lib/utils';

const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
	{
		variants: {
			variant: {
				default: 'light-mode-link-button dark:dark-mode-link-button',
				outline:
					'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
				secondary:
					'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				link: 'text-primary-foreground underline-offset-4 hover:underline',
				github: 'light-mode-link-button dark:dark-mode-link-button',
				githubProject:
					'light-mode-project-button dark:dark-mode-link-button',
				linkedin: 'light-mode-link-button dark:dark-mode-link-button',
				youtube: 'text-primary-foreground bg-red-600 hover:bg-red-700',
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
			outline: 'mr-2 size-4',
			secondary: 'mr-2 size-4',
			link: 'mr-2 size-4',
			github: 'mr-2 size-5',
			githubProject: 'mr-2 size-4',
			linkedin: 'mr-2 size-5',
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
