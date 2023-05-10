import { tokens } from 'designSystem/themes/tokens';
import styled from 'styled-components';
import { ButtonTypes } from './Button';

interface ContainerProps {
	variant?: ButtonTypes;
	fullSize?: boolean;
}

export const Container = styled.button<ContainerProps>`
	padding: 14px;
	font-family: ${tokens.fontFamily.default};
	font-weight: ${tokens.fontWeight.regular};
	font-style: normal;
	font-size: ${tokens.fontSize.medium};
	text-decoration: none;
	line-height: 22px;
	border: 2px solid ${tokens.color.primary.lighter};
	padding: 16px 24px;
	background-color: ${tokens.color.primary.default};
	background: ${({ variant }) => variant === 'label' && 'none'};
	border: none;
	color: ${({ variant }) =>
		variant === 'label' ? tokens.color.primary.default : 'white'};
	transition: all 0.5s;
	width: ${({ fullSize }) => (fullSize ? '100%' : 'fit-content')};
	cursor: pointer;

	:hover {
		opacity: 90%;
	}
`;
