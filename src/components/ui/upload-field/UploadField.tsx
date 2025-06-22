import { UploadCloud } from 'lucide-react';
import { useId } from 'react';
import type { FieldError } from 'react-hook-form';

import { ImagePreview } from './ImagePreview';
import { useUpload } from './useUpload';

interface Props {
	folder?: string;
	value?: string;
	onChange: (url: string) => void;
	label: string;
	error?: FieldError;
	className?: string;
	isImage?: boolean;
	aspectRation?: '16:9' | '1:1';
	overlay?: string;
}

export function UploadField({
	folder,
	value,
	onChange,
	label,
	error,
	className,
	isImage = true,
	aspectRation = '1:1',
	overlay,
}: Props) {
	const { uploadFile, isLoading } = useUpload({ onChange, folder });
	const inputId = useId();
	

	return (
		<div className={className}>
			<label htmlFor={inputId} className='block text-gray-400 font-semibold mb-2'>
				{label}
			</label>
			<label
				htmlFor={inputId}
				className='flex items-center px-4 py-2 bg-transparent text-primary border border-primary rounded-lg shadow-md cursor-pointer hover:bg-primary hover:text-white  transition-colors w-max'
			>
				<UploadCloud className='mr-2' /> Upload image
			</label>
			<input id={inputId} type='file' onChange={uploadFile} accept='image/*' className='hidden' />
			{error && <p className='text-red-500 text-sm mt-1'>{error.message}</p>}
			{isImage && (
				<ImagePreview
                    isLoading={isLoading}
					aspectRation={aspectRation}
                    overlay={overlay}
					value={value}
					
				/>
			)}
		</div>
	);
}
