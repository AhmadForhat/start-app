import styled from 'styled-components';

export const Container = styled.div``;

export const ContainerImage = styled.div`
	margin: -12px;

	img {
		width: 100%;
		max-width: 520px;
	}
`;

export const ContainerContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 24px;

	h2 {
		padding-bottom: 12px;
	}

	button {
		margin-top: 64px;
		margin-bottom: 32px;
	}
`;

export const LogoContainer = styled.img`
	padding-bottom: 32px;
	width: 60px;
`;
