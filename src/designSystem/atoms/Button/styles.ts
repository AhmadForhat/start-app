import { tokens } from 'designSystem/themes/tokens';
import styled from 'styled-components';
import { ButtonTypes } from './Button';

interface ContainerProps {
	variant?: ButtonTypes;
	fullSize?: boolean;
	disabled?: boolean;
}

const getColor = (variant?: ButtonTypes) => {
	if (variant === 'label') {
		return tokens.color.primary.default;
	}

	if (variant === 'secondary') {
		return 'black';
	}

	return 'white';
};

const backgroundColor = (variant?: ButtonTypes, disabled?: boolean) => {
	if (disabled) {
		return tokens.color.gray.light;
	}
	if (variant === 'secondary') {
		return 'white';
	}

	return tokens.color.primary.default;
};

const border = (variant?: ButtonTypes, disabled?: boolean) => {
	if (disabled) {
		return 'none';
	}

	if (variant === 'secondary') {
		return '2px solid black';
	}

	if (variant === 'primary') {
		return `2px solid ${tokens.color.primary.default}`;
	}

	return 'none';
};

export const Container = styled.button<ContainerProps>`
	padding: 14px;
	font-family: ${tokens.fontFamily.default};
	font-weight: ${tokens.fontWeight.regular};
	font-style: normal;
	font-size: ${tokens.fontSize.medium};
	text-decoration: none;
	line-height: 22px;
	border: ${({ variant, disabled }) => border(variant, disabled)};
	box-sizing: border-box;
	outline: none;
	padding: 16px 24px;
	background-color: ${({ disabled, variant }) =>
		backgroundColor(variant, disabled)};
	background: ${({ variant }) => variant === 'label' && 'none'};
	color: ${({ variant }) => getColor(variant)};
	transition: all 0.5s;
	width: ${({ fullSize }) => (fullSize ? '100%' : 'fit-content')};
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

	:hover {
		opacity: 90%;
	}
`;
