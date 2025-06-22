'use client';

import { Controller } from 'react-hook-form';

import { Button } from '@/ui/button/Button';
import { Field } from '@/ui/field/Field';
import { TextArea } from '@/ui/field/Text-area';
import { UploadField } from '@/ui/upload-field/UploadField';

import { useSettingsForm } from '@/hooks/useSettingsForm';

export function SettingsForm() {
	const {
		form: {
			handleSubmit,
			register,
			formState: { errors },
			control,
		},
		onSubmit,
		isPending,
		isProfileLoading,
	} = useSettingsForm();
	if (isProfileLoading) {
		return <div>LoaDING...</div>;
	}
	return (
		<div className='w-2/3'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='grid grid-cols-2 gap-10'>
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
							registration={register('password')}
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

					<div>
						{/* avatar: */}
						<Controller
							control={control}
							name='channel.avatarUrl'
							render={({ field: { onChange, value }, fieldState: { error } }) => (
								<UploadField
									label='Avatar:'
									onChange={onChange}
									value={value}
									error={error}
									folder='avatars'
									
								/>
							)}
						/>
						{/* banner: */}
						<Controller
							control={control}
							name='channel.bannerUrl'
							render={({ field: { onChange, value }, fieldState: { error } }) => (
								<UploadField
									label='Banner:'
									onChange={onChange}
									value={value}
									error={error}
									folder='banners'
									aspectRation='16:9'
									className='mt-5'
									overlay='/overlay.png'
								/>
							)}
						/>
					</div>
				</div>
				<div className='text-center mt-10'>
					<Button type='submit' isLoading={isPending}>
						Update
					</Button>
				</div>
			</form>
		</div>
	);
}
