import styled from 'styled-components';
import { tokens } from 'designSystem/themes/tokens';

export const Container = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	p {
		font-size: ${tokens.fontSize.small};
		font-weight: ${tokens.fontWeight.bold};
	}
`;

export const ContainerButton = styled.div`
	margin-top: 24px;
`;

export const ContainerResult = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	h3 {
		display: flex;
		justify-content: center;
	}
`;
