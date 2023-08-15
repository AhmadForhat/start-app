import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 14px;

	h2 {
		color: black;
		font-size: 20px;
	}

	p {
		color: #7d837e;
		font-size: 18px;
	}
`;

export const ContainerButtons = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 24px;

	button {
		width: 100%;
		padding: 8px;
	}
`;
