'use client';

import { useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { Logo } from '@/components/layout/sidebar/header/Logo';

import { Button } from '@/ui/button/Button';
import { Field } from '@/ui/field/Field';

import type { FormProps } from '@/types/auth-form.types';

export function Auth() {
	const [isLogin, setIsLogin] = useState(true);
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset
	} = useForm<FormProps>({
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<FormProps> = data => {
		if (isLogin) {
			console.log('if', data);
		} else {
			console.log('else', data);
		}
	};
	return (
		<div className='w-screen h-screen flex justify-center items-center'>
			<div className='w-1/6 p-layout border-border border rounded'>
				<div className='text-center mb-1'>
					<Logo />
				</div>
				<div className='flex justify-center mb-6'>
					<button
						type='button'
						className={`px-4 py-2 font-semibold ${isLogin ? 'text-primary border-b-2 border-primary' : 'text-gray-600'}`}
						onClick={() => setIsLogin(true)}
					>
						Login
					</button>
					<button
						type='button'
						className={`px-4 py-2 font-semibold ${!isLogin ? 'text-primary border-b-2 border-primary' : 'text-gray-600'}`}
						onClick={() => setIsLogin(false)}
					>
						Register
					</button>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						label='Email'
						type='email'
						registration={register('email', { required: 'Email is required!' })}
						error={errors.email?.message}
						placeholder='Enter email'
					/>
					<Field
						label='Password'
						type='password'
						registration={register('password', { required: 'Password is required!' })}
						error={errors.password?.message}
						placeholder='Enter passoword'
					/>
					{!isLogin && (
						<Field
							label='Password again'
							type='password'
							registration={register('passwordAgain', {
								required: 'Again your password!',
								validate: value => value === watch('password') || 'Password don`t match',
							})}
							error={errors.passwordAgain?.message}
							placeholder='Enter passoword again'
						/>
					)}
					<div className='text-center mt-6'>
						<Button type='submit'>{isLogin ? 'Login' : 'Register'}</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
