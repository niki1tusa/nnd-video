import { useMutation } from '@tanstack/react-query';
import { LogOut } from 'lucide-react';

import { authService } from '@/services/auth.service';
import { useTypedSelector } from '@/store';

export function Logout() {
	const { mutate, isPending } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
	});
	const { isLoggedIn } = useTypedSelector(state => state.auth);
    
    if (!isLoggedIn) return null;
	return (
		<button className='group py-3 flex items-center gap-5' onClick={() => mutate()}>
			<LogOut className=' min-w-6 group-hover:text-primary transition group-hover:rotate-6' />
			<span>{isPending ? 'Please wait' : 'Logout'}</span>
		</button>
	);
}
