import styled, { css } from 'styled-components';

type DrawerContainerProps = {
	isOpen?: boolean;
	position?: 'left' | 'right' | 'bottom' | 'top';
	width?: string;
	height?: string;
	left?: string;
	top?: string;
};

const getMeeters = (position: string | undefined, type: string) => {
	if (type === 'height')
		return position === 'left' || position === 'right' ? '100%' : '40%';
	return position === 'left' || position === 'right' ? '40%' : '100%';
};

const getDirections = (position: string | undefined) => {
	if (position === 'right') return 'translateX(105%)';
	if (position === 'left') return 'translateX(-105%)';
	if (position === 'bottom') return 'translateY(105%)';
	if (position === 'top') return 'translateY(-105%)';

	return 'translateX(-105%)';
};

export const DrawerContainer = styled.div<DrawerContainerProps>`
	position: fixed;
	z-index: 1050;
	width: 100%;
	max-width: ${({ width, position }) => width || getMeeters(position, 'width')};
	height: 100%;
	max-height: ${({ height, position }) =>
		height || getMeeters(position, 'height')};
	background: white;
	transition: 0.3s ease-in-out;
	overflow: hidden;

	transform: ${({ position }) => getDirections(position)};
	overflow-y: auto;

	${({ position }) =>
		position &&
		css`
			${position}: 0;
		`};

	${({ isOpen, position }) =>
		isOpen &&
		css`
			transform: ${position === 'right' || position === 'left'
				? 'translateX(0)'
				: 'translateY(0)'};
			-webkit-transform: ${position === 'right' || position === 'left'
				? 'translateX(0)'
				: 'translateY(0)'};
		`};

	${({ position, top, left }) => {
		if (position === 'left' || position === 'right')
			return css`
				top: ${top};
			`;
		if (position === 'bottom' || position === 'top')
			return css`
				left: ${left};
			`;
	}}
`;

export const BackDropContainer = styled.div<DrawerContainerProps>`
	display: ${({ isOpen }) => !isOpen && 'none'};
	position: fixed;
	top: 0;
	left: ${({ isOpen }) => (isOpen ? '0%' : '100%')};
	z-index: 1040;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
`;
