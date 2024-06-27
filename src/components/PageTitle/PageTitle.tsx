import { ReactNode } from 'react';

export default function PageTitle({ children }: { children: ReactNode }) {
	return (
		<h1 className='mt-2 mb-10 text-4xl font-bold text-center font-montserrat'>
			{children}
		</h1>
	);
}
