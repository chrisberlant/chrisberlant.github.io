import { useContext, useEffect, useState } from 'react';
import { CommitInfosType, CommitType } from '@/lib/types';
import Card from '@/components/Card/Card';
import { dateFormatting } from '@/lib/utils';
import Blob from '@/components/Blob/Blob';
import GitHubLogoWhite from '@assets/github-logo-white.svg';
import GitHubLogoBlack from '@assets/github-logo-black.svg';
import { ThemeProviderContext } from '../../ThemeProvider/ThemeProvider';

export default function GitHubActivity() {
	const { theme } = useContext(ThemeProviderContext);
	const [commits, setCommits] = useState<CommitInfosType[]>([]);

	useEffect(() => {
		const abortController = new AbortController();

		const getLastCommits = async () => {
			const url = `https://api.github.com/users/chrisberlant/events/public`;

			try {
				const reposResponse = await fetch(url, {
					signal: abortController.signal,
				});
				if (!reposResponse.ok)
					throw new Error('Failed to fetch repositories');
				const fetchedCommits: CommitType[] = await reposResponse.json();

				// Get only the commits not from the portfolio and branch merges, then map them on an array of objects containing their infos
				const formattedCommits = fetchedCommits
					.filter(
						(commit) =>
							commit.repo.id !== 605565490 &&
							!commit.payload.commits.some((commit) =>
								commit.message.includes('Merge branch')
							)
					)
					.map((commit) => ({
						date: commit.created_at,
						title: commit.repo.name,
						messages: commit.payload.commits.map(
							(commit) => commit.message
						),
					}));
				// Remove the duplicates
				const uniqueCommits: CommitInfosType[] = [];
				formattedCommits.forEach((commit) =>
					!uniqueCommits.find((duplicate) =>
						JSON.stringify(duplicate.messages).includes(
							JSON.stringify(commit.messages)
						)
					)
						? uniqueCommits.push(commit)
						: null
				);

				setCommits(uniqueCommits.slice(0, 5));
			} catch (error: any) {
				if (error.name !== 'AbortError')
					console.error('Error fetching commits:', error);
			}
		};

		getLastCommits();

		return () => {
			abortController.abort();
		};
	}, []);

	return (
		<Card className='relative pb-5 pt-7 max-w-7xl'>
			<Blob
				svg={theme === 'light' ? GitHubLogoBlack : GitHubLogoWhite}
				className='absolute transform -translate-x-1/2 -translate-y-1/2 opacity-70 -z-10 left-1/2 top-1/2 size-56'
			/>
			<h2 className='self-center px-4 mb-8 text-3xl font-bold text-center font-montserrat'>
				Recent GitHub activity
			</h2>
			<ol className='flex flex-col gap-2 sm:pl-4 lg:pl-10 xl:pl-16'>
				{commits?.map((commit) => (
					<li key={commit.date}>
						<a
							className='text-lg font-semibold'
							href={`https://github.com/${commit.title}`}
							target='_blank'
						>
							{commit.title} - {dateFormatting(commit.date)}
						</a>
						<ol className='mt-1 text-sm font-robotoMono'>
							{commit.messages.map((message) => (
								<li
									key={message}
									className='mt-1 py-0.5 px-1.5 w-fit bg-muted/60 rounded-xl'
								>
									{message}
								</li>
							))}
						</ol>
					</li>
				))}
			</ol>
		</Card>
	);
}
