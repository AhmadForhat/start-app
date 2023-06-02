import { tokens } from 'designSystem';
import styled from 'styled-components';

export const Container = styled.div``;

export const ContainerPageInfo = styled.div`
	width: 250px;
	height: 300px;
	margin: 36px auto 48px auto;
	border-radius: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	img {
		width: 150px;
		height: 150px;
	}
`;

export const ContainerDescription = styled.div``;

export const Title = styled.h2`
	color: ${tokens.color.primary.default};
	font-size: 24px;
	margin-bottom: 15px;
	text-align: center;
`;

export const Description1 = styled.p`
	color: black;
	text-align: center;
`;

export const Description2 = styled.p`
	color: black;
	text-align: center;
	margin-bottom: 86px;
	font-weight: bold;
`;

export const ContainerButton = styled.div``;
