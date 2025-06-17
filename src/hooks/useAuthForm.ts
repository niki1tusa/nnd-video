import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useRef, useTransition } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import type { UseFormReset } from 'react-hook-form';
import toast from 'react-hot-toast';

import { PAGE } from '@/config/public-page.config';

import { authService } from '@/services/auth.service';
import type { AuthDataTypes, FormProps } from '@/types/auth-form.types';

export function useAuthForm(type: 'login' | 'register', reset: UseFormReset<FormProps>) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const recaptchaRef = useRef<ReCAPTCHA>(null);
	// rename isPending
	const { mutate, isPending: isAuthPending } = useMutation({
		mutationKey: [type],
		mutationFn: (data: AuthDataTypes) =>
			authService.main(type, data, recaptchaRef.current?.getValue()),
		onSuccess() {
			reset();
			router.push(PAGE.HOME);
		},
		onError(error) {
			// check what it's error from axios
			if (axios.isAxiosError(error)) {
				toast.error(error.response?.data.message);
			}
		},
	});
	return {};
}
