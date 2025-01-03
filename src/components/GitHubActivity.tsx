import { useEffect, useState } from 'react';
import type { CommitInfosType, CommitType } from '@/lib/types';
import Card from '@/components/Card';
import { dateFormatting } from '@/lib/utils';
import GithubBackground from './GithubBackground';
import NotFoundAnimate from '@/assets/not-found-animate.svg';
import { LoaderCircleIcon } from 'lucide-react';

export default function GitHubActivity() {
	const [commits, setCommits] = useState({
		data: null as CommitInfosType[] | null,
		loading: true,
		error: false,
	});

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
							commit.type !== 'CreateEvent' &&
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

				setCommits({
					loading: false,
					error: false,
					data: uniqueCommits.slice(0, 5),
				});
			} catch (error: any) {
				if (error.name !== 'AbortError')
					setCommits({ ...commits, loading: false, error: true });
			}
		};

		getLastCommits();

		return () => {
			abortController.abort();
		};
	}, []);

	return (
		<Card className='relative flex flex-col max-w-4xl pb-5 sm:px-8 pt-7'>
			<h2 className='mb-8 text-3xl font-bold text-center font-montserrat'>
				Recent public GitHub activity
			</h2>

			{!commits.error && (
				<GithubBackground className='absolute transform -translate-x-1/2 -translate-y-1/2 opacity-70 -z-10 left-1/2 top-1/2 size-56' />
			)}

			{commits.loading && (
				<LoaderCircleIcon size={120} className='mb-4 animate-spin' />
			)}

			{commits.error && (
				<div className='flex flex-col items-center max-w-xl'>
					<img
						src={NotFoundAnimate.src}
						alt=''
						className='lg:max-w-56 max-w-36'
					/>
					<span className='px-8 pt-2 text-center font-robotoMono'>
						The GitHub server could not be joined or an error
						happened while fetching the data
					</span>
				</div>
			)}

			{commits.data && (
				<ol className='flex flex-col gap-2'>
					{commits.data.map((commit) => (
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
			)}
		</Card>
	);
}
