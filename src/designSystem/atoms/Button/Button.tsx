import React from 'react';
import { Container } from './styles';
import { Loading } from '../Loading';

export type ButtonTypes = 'primary' | 'label' | 'secondary';
export interface ButtonProps {
	text: string;
	onClick?: () => void;
	variant?: ButtonTypes;
	isLoading?: boolean;
	fullSize?: boolean;
	disabled?: boolean;
	background_color?: string;
	text_color?: string;
}

export const Button = ({
	text,
	onClick,
	isLoading,
	variant = 'primary',
	fullSize = false,
	disabled,
	background_color,
	text_color,
}: ButtonProps): JSX.Element => {
	return (
		<Container
			variant={variant}
			onClick={onClick}
			fullSize={fullSize}
			disabled={disabled}
			background_color={background_color}
			text_color={text_color}
		>
			{isLoading ? <Loading size={24} /> : text}
		</Container>
	);
};
