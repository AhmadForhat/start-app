import React from 'react';

import { Container, ContainerWithouAnimation } from './Skeleton.styles';

export interface SkeletonProps {
	width?: string;
	height?: string;
	borderRadius?: string;
	animation?: boolean;
}

export const Skeleton = ({
	width,
	height,
	borderRadius,
	animation = true,
}: SkeletonProps): JSX.Element => {
	if (animation) {
		return (
			<Container
				id="skeleton"
				width={width}
				height={height}
				borderRadius={borderRadius}
			/>
		);
	}

	return (
		<ContainerWithouAnimation
			id="skeleton"
			width={width}
			height={height}
			borderRadius={borderRadius}
		/>
	);
};
