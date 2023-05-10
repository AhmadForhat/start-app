import { tokens } from 'designSystem';
import styled from 'styled-components';

export const Container = styled.div``;

export const ContainerIcon = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;

	.close-icon {
		width: 24px;
		height: 24px;
	}
`;

export const ContainerPageInfo = styled.div`
	width: 250px;
	height: 300px;
	background-color: #e9e7dd;
	margin: 36px auto 48px auto;
	border-radius: 30px;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	svg {
		width: 152px;
		height: 152px;
	}
`;

export const ContainerSteps = styled.div`
	margin-top: 28px;
	display: flex;
	gap: 10px;
`;

interface SquareProps {
	actived?: boolean;
}

export const Square = styled.div<SquareProps>`
	width: 10px;
	height: 10px;
	border: 1px solid ${tokens.color.primary.default};
	background-color: ${({ actived }) => actived && tokens.color.primary.default};
`;

export const ContainerDescription = styled.div``;

export const Title = styled.h2`
	color: ${tokens.color.primary.default};
	font-size: 24px;
	margin-bottom: 15px;
	text-align: center;
`;

export const Description = styled.p`
	color: black;
	text-align: center;
	margin-bottom: 86px;
`;
