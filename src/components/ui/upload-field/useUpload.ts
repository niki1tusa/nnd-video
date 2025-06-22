import { useMutation } from '@tanstack/react-query';
import { type ChangeEvent, useCallback } from 'react';
import toast from 'react-hot-toast';

import { fileService } from '@/services/file.service';

type IUsedUpload = (props: { onChange: (...event: any[]) => void; folder?: string }) => {
	uploadFile: (e: ChangeEvent<HTMLInputElement>) => void;
	isLoading: boolean;
};

export const useUpload: IUsedUpload = ({ onChange, folder }) => {
	const { mutate, isPending } = useMutation({
		mutationKey: ['upload file'],
		mutationFn: (data: FormData) => fileService.upload(data, folder),
		onSuccess: ({ data }) => {
			onChange(data[0].url);
		},
		onError: (error: any) => {
			console.error('Upload error:', error);
			if (error?.response?.data?.message) {
				toast.error(`Ошибка загрузки: ${error.response.data.message}`);
			} else if (error?.message) {
				toast.error(`Ошибка загрузки: ${error.message}`);
			} else {
				toast.error('Произошла ошибка при загрузке файла');
			}
		},
	});
	const uploadFile = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const files = e.target.files;
			if (!files?.length) return;
			const formData = new FormData();
			formData.append('file', files[0]);
			mutate(formData);
		},
		[mutate]
	);
	return { uploadFile, isLoading: isPending };
};
