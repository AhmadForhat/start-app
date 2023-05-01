import styled, { keyframes } from 'styled-components';

const shine = keyframes`
 to {
		background-position-x: -200%;
	}
`;

export interface ContainerProps {
	width?: string;
	height?: string;
	borderRadius?: string;
}

export const Container = styled.div<ContainerProps>`
	background: #eee;
	background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
	border-radius: 5px;
	background-size: 200% 100%;
	animation: 1.5s ${shine} linear infinite;
	width: ${({ width }) => width || '100%'};
	height: ${({ height }) => height || '30px'};
	border-radius: ${({ borderRadius }) => borderRadius};
`;

export const ContainerWithouAnimation = styled.div<ContainerProps>`
	background: #eee;
	border-radius: 5px;
	background-size: 200% 100%;
	animation: 1.5s ${shine} linear infinite;
	width: ${({ width }) => width || '100%'};
	height: ${({ height }) => height || '30px'};
	border-radius: ${({ borderRadius }) => borderRadius};
`;
