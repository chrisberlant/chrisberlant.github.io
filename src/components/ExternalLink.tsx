import { GlobeIcon } from 'lucide-react';
import GithubIcon from './Icons/GithubIcon';
import { buttonVariants } from './ui/button';

interface ExternalLinkProps {
	link: string;
	text: string;
	title: string;
	type: 'repo' | 'app';
}

export default function ExternalLink({
	link,
	text,
	title,
	type,
}: ExternalLinkProps) {
	return (
		<a
			href={link}
			title={title}
			target='_blank'
			className={buttonVariants({ variant: 'externalLink', size: 'sm' })}
		>
			{type === 'repo' && <GithubIcon className='mr-2 size-5' />}
			{type === 'app' && <GlobeIcon className='mr-2 size-5' />}
			{text}
		</a>
	);
}
