import clsx from 'clsx';
import type { InputHTMLAttributes } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	error?: string;
	registration: UseFormRegisterReturn;
}

export function Field({ label, error, registration, ...props }: Props) {
	return (
		<div className='mb-4'>
			<label>
				<span className='block text-gray-400 font-semibold mb-2'>{label}</span>

				<input
					className={clsx(
						'w-full bg-transparent px-3 py-2  border rounded shadow-sm border-gray-700 transition-colors focus:outline-none focus:ring-0 focus:border-gray-500',
						error ? 'border-red-500' : 'border-border'
					)}
					{...registration}
					{...props}
				/>
			</label>
			{error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
		</div>
	);
}
