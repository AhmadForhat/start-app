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

export const GradeCircle = styled.div`
	margin: 32px auto;
	height: 150px;
	width: 150px;
	.CircularProgressbar {
		text-align: center;
	}
`;

export const Texts = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	color: ${tokens.color.gray.default};
	text-align: center;
	gap: 10px;
	font-weight: ${tokens.fontWeight.regular};
	.t1 {
		font-size: ${tokens.fontSize.large};
	}
	.t2 {
		font-size: ${tokens.fontSize.medium};
	}
	.t3 {
		color: #3ac417;
		font-size: ${tokens.fontSize.medium};
	}
	.t4 {
		margin-top: 20px;
		font-size: ${tokens.fontSize.small};
	}
`;
