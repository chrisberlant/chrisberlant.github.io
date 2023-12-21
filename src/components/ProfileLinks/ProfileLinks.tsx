import { ReactNode } from 'react';

function ProfileLinks({ children }: { children: ReactNode }) {
	return <div className='flex justify-center gap-4'>{children}</div>;
}

export default ProfileLinks;
