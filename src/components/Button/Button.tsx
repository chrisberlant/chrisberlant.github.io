import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default:
					'bg-primary text-primary-foreground hover:bg-primary/90',
				destructive:
					'bg-destructive text-destructive-foreground hover:bg-destructive/90',
				outline:
					'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
				secondary:
					'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline',
				github: 'text-white bg-gray-500 hover:bg-gray-600',
				linkedin: 'text-white bg-blue-500 hover:bg-blue-600',
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9 rounded-md px-3',
				lg: 'h-11 rounded-md px-8',
				icon: 'h-10 w-10',
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
			default: 'mr-1 size-4',
			destructive: '',
			outline: '',
			secondary: '',
			ghost: '',
			link: '',
			github: 'mr-2 size-5',
			linkedin: 'mr-1 size-7',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});

interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	text: string;
	logo?: string;
	logoSize?: number;
	logoAlt?: string;
}

function Button({
	className,
	variant,
	size,
	text,
	logo,
	logoAlt,
	...props
}: ButtonProps) {
	return (
		<button
			className={cn(buttonVariants({ variant, size, className }))}
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

export default Button;
