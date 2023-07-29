import { tokens } from 'designSystem/themes/tokens';
import styled from 'styled-components';
import { ButtonTypes } from './Button';

interface ContainerProps {
	variant?: ButtonTypes;
	fullSize?: boolean;
	disabled?: boolean;
	background_color?: string;
	text_color?: string;
}

const getColor = (variant?: ButtonTypes, text_color?: string) => {
	if (variant === 'label') {
		return tokens.color.primary.default;
	}

	if (variant === 'secondary' || text_color === 'black') {
		return 'black';
	}

	return 'white';
};

const backgroundColor = (
	variant?: ButtonTypes,
	disabled?: boolean,
	background_color?: string,
) => {
	if (disabled) {
		return tokens.color.gray.light;
	}
	if (background_color === 'grey') {
		return tokens.color.gray.default;
	}
	if (variant === 'secondary') {
		return 'white';
	}
	if (background_color === 'white') {
		return 'white';
	}

	return tokens.color.primary.default;
};

const border = (
	variant?: ButtonTypes,
	disabled?: boolean,
	background_color?: string,
) => {
	if (disabled || background_color === 'grey') {
		return 'none';
	}

	if (variant === 'secondary' || background_color === 'white') {
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
	border: ${({ variant, disabled, background_color }) =>
		border(variant, disabled, background_color)};
	box-sizing: border-box;
	outline: none;
	padding: 16px 24px;
	background-color: ${({ disabled, variant, background_color }) =>
		backgroundColor(variant, disabled, background_color)};
	background: ${({ variant }) => variant === 'label' && 'none'};
	color: ${({ variant, text_color }) => getColor(variant, text_color)};
	transition: all 0.5s;
	width: ${({ fullSize }) => (fullSize ? '100%' : 'fit-content')};
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

	:hover {
		opacity: 90%;
	}
`;
