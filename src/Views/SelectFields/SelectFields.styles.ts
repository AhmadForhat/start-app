import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 40px;
`;

export const ContainerTitle = styled.div`
	display: flex;
	justify-content: center;
	height: 33.5px;

	button {
		background: none;
		border: none;
	}

	.back-icon {
		width: 24px;
		height: 24px;
	}
`;

export const Title = styled.h2`
	display: flex;
	justify-content: center;
	height: 33.5px;
	font-size: 18px;
	font-family: 'Myriad Pro', Arial, sans-serif;
	color: black;
	border: none;
	margin-right: 24px;
`;

export const PageTitleWrapper = styled.div`
	border-top: 0.01px solid #ddd;
	margin-bottom: 15px;
	margin-top: 8px;
`;
