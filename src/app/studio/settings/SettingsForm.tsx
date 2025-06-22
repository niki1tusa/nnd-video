'use client';

import { Button } from '@/ui/button/Button';
import { Field } from '@/ui/field/Field';
import { TextArea } from '@/ui/field/Text-area';

import { useSettingsForm } from '@/hooks/useSettingsForm';

export function SettingsForm() {
	const {
		form: {
			handleSubmit,
			register,
			formState: { errors },
		},
		onSubmit,
		isPending,
        isProfileLoading
	} = useSettingsForm();
    if(isProfileLoading){
        return <div>LoaDING...</div>
    }
	return (
		<div className='w-2/3'>
			<form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-10'>
				<div>
					<Field
						label='Name'
						type='text'
						registration={register('name')}
						error={errors.name?.message}
						placeholder='Enter name'
					/>
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
						placeholder='Enter password'
					/>
					<Field
						label='Slug (alias)'
						type='text'
						registration={register('channel.slug')}
						error={errors.channel?.slug?.message}
						placeholder='Enter slug'
					/>
					<TextArea
						label='Description'
						registration={register('channel.description')}
						error={errors.channel?.description?.message}
						placeholder='Enter description'
                        rows={5}
					/>
				</div>
				<div></div>
				<div className='text-center mt-6'>
					<Button type='submit' isLoading={isPending}>
						Update
					</Button>
				</div>
			</form>
		</div>
	);
}
