import styled from 'styled-components';
import { tokens } from 'designSystem';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
	padding-top: 20px;
`;

export const ContainerOption = styled.div`
	display: flex;
	gap: 11px;
	font-family: ${tokens.fontFamily.default};
	font-size: ${tokens.fontSize.small};

	input[type='radio'] {
		accent-color: #232323;
	}
`;
