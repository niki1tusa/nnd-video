import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean;
	children: ReactNode;
}

export function Button({ isLoading, children, ...props }: Props) {
	return (
		<button
			className='py-2 px-8 bg-primary text-white font-semibold rounded hover:bg-red-300 transition-colors disabled:bg-gray-400'
			disabled={isLoading || props.disabled}
			{...props}
		>
			{isLoading ? 'loading' : children}
		</button>
	);
}
