import { GlobeIcon } from 'lucide-react';
import GithubBackground from './GithubBackground';
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
			{type === 'repo' && <GithubBackground className='mr-2 size-5' />}
			{type === 'app' && <GlobeIcon className='mr-2 size-5' />}
			{text}
		</a>
	);
}
