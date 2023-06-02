import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
`;

export const ContainerOption = styled.div`
	display: flex;
	gap: 11px;

	input[type='radio'] {
		accent-color: #232323;
	}
`;
