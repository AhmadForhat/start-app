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
}

export const Button = ({
	text,
	onClick,
	isLoading,
	variant = 'primary',
	fullSize = false,
}: ButtonProps): JSX.Element => {
	return (
		<Container variant={variant} onClick={onClick} fullSize={fullSize}>
			{isLoading ? <Loading size={24} /> : text}
		</Container>
	);
};
