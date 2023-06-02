import styled from 'styled-components';

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

export const Title = styled.div`
	display: flex;
	justify-content: center;
	height: 33.5px;
	font-size: 18px;
	font-family: 'Myriad Pro', Arial, sans-serif;
	font-weight: normal;
	color: black;
	border: none;
`;

export const SpacerTitle = styled.div`
	border-top: 0.01px solid #ddd;
	margin-bottom: 15px;
	margin-top: 8px;
	margin-right: -3.5%;
	margin-left: -3.5%;
`;
