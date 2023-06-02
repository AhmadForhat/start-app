import React from 'react';
import { Container } from './styles';
import { Loading } from '../Loading';

export type ButtonTypes = 'primary' | 'label';
export interface ButtonProps {
	text: string;
	onClick?: () => void;
	variant?: ButtonTypes;
	isLoading?: boolean;
	fullSize?: boolean;
	disabled?: boolean;
}

export const Button = ({
	text,
	onClick,
	isLoading,
	variant = 'primary',
	fullSize = false,
	disabled,
}: ButtonProps): JSX.Element => {
	return (
		<Container
			variant={variant}
			onClick={onClick}
			fullSize={fullSize}
			disabled={disabled}
		>
			{isLoading ? <Loading size={24} /> : text}
		</Container>
	);
};
