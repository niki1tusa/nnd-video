import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useRef, useTransition } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import type { SubmitHandler, UseFormReset } from 'react-hook-form';
import toast from 'react-hot-toast';

import { PAGE } from '@/config/public-page.config';


import { authService } from '@/services/auth.service';
import type { AuthDataTypes, FormProps } from '@/types/auth-form.types';

export function useAuthForm(type: 'login' | 'register', reset: UseFormReset<FormProps>) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const recaptchaRef = useRef<ReCAPTCHA>(null);
	// rename isPending
	const { mutateAsync, isPending: isAuthPending } = useMutation({
		mutationKey: [type],
		mutationFn: (data: AuthDataTypes) =>
			authService.main(type, data, recaptchaRef.current?.getValue()),
	});

	const onSubmit: SubmitHandler<FormProps> = ({ email, password }) => {
		const token = recaptchaRef.current?.getValue();
		if (!token) {
			toast.error('Pass the captcha!', {
				id: 'recaptcha',
			});
			return;
		}
		toast.promise(
			mutateAsync({
				email,
				password,
			}),
			{
				loading: 'Loading...',
				success: () => {
					startTransition(() => {
						reset();
						router.push(PAGE.HOME);
					});
					return 'Success in login!';
				},
				error: e => {
					if (axios.isAxiosError(e)) {
						return toast.error(e.response?.data.message);
					}
				},
			}
		);
	};
	const isLoading = isPending || isAuthPending;
	return { onSubmit, recaptchaRef, isLoading };
}
