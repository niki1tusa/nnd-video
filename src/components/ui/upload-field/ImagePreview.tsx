import Image from 'next/image';

import { SkeletonLoader } from '../SkeletonLoader';

interface Props {
	aspectRation: '16:9' | '1:1';
	isLoading: boolean;
	value?: string;
	overlay?: string;
}
export function ImagePreview({ aspectRation, isLoading, value, overlay }: Props) {
	const isWidthScreenRation = aspectRation === '16:9';
	const width = isWidthScreenRation ? 446 : 100;
	const height = isWidthScreenRation ? 250 : 100;
	return (
		<div className='mt-3'>
			{isLoading ? (
				<SkeletonLoader
					style={{
						width,
						height,
					}}
				/>
			) : (
				!!value && (
					<div className='relative'>
						{!!overlay && (
							<Image
								alt='Overlay'
								className='rounded-md absolute top-0 left-0 w-full h-full'
								src={overlay}
								width={width}
								height={height}
								priority
							/>
						)}
						<Image
							alt='upload file'
							className='rounded-md'
							src={value}
							width={width}
							height={height}
							priority
						/>
					</div>
				)
			)}
		</div>
	);
}
