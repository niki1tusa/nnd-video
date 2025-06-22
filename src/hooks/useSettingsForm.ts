import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { useProfile } from './useProfile';
import { userService } from '@/services/user.service';
import type { ISettingsData } from '@/types/settings.types';

export function useSettingsForm() {
	const form = useForm<ISettingsData>({ mode: 'onChange' });

	const { profile, isSuccess, isLoading } = useProfile();
	useEffect(() => {
		if (!isSuccess) return;
		form.reset(profile);
	}, [form, profile, isSuccess]);
	// reset - устанавливает начальные значения из profile (reset - сбрасывает и вставляет новые значения) 
	const { mutate, isPending } = useMutation({
		mutationKey: ['update-settings'],
		mutationFn: (data: ISettingsData) => userService.updateProfile(data),
	});

	const onSubmit: SubmitHandler<ISettingsData> = data => {
		mutate(data);
	};

	return { form, onSubmit, isPending, isProfileLoading: isLoading };
}
