import styled from 'styled-components';
import { tokens } from 'designSystem';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 20px;
`;

export const ContainerOption = styled.div`
	padding: 10px 0;
	display: flex;
	line-height: 21px;
	gap: 11px;
	font-family: ${tokens.fontFamily.default};
	font-size: ${tokens.fontSize.small};

	input[type='radio'] {
		accent-color: #232323;
		flex-direction: column;
		margin-bottom: auto;
		margin-top: 3px;
	}
`;
