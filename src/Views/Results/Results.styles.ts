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
