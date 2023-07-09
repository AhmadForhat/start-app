import styled from 'styled-components';
import { tokens } from 'designSystem/themes/tokens';

export const Container = styled.div`
	h2 {
		color: #000000;
		font-family: 'Myriad Pro', Arial, sans-serif;
		font-size: 22px;
		font-weight: normal;
	}
`;

export const ContainerLoading = styled.div`
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

export const ContainerButtons = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
`;

export const GradeCircle = styled.div`
	margin: 32px auto;
	display: flex;
	border-radius: 100%;
	height: 150px;
	width: 150px;
	justify-content: center;
	align-items: center;
`;
