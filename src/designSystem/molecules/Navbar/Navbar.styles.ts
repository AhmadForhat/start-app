import styled from 'styled-components';

export const ContainerTitle = styled.div`
	position: relative;
	display: flex;
	align-items: center;

	button {
		background: none;
		border: none;
	}

	.back-icon {
		width: 24px;
		height: 24px;
	}
`;

interface TitleProps {
	hasBackButton?: boolean;
}

export const Title = styled.h2<TitleProps>`
	display: flex;
	justify-content: center;
	height: 33.5px;
	font-size: 18px !important;
	font-family: 'Myriad Pro', Arial, sans-serif;
	font-weight: normal;
	color: black;
	border: none;
	margin-right: ${({ hasBackButton }) => hasBackButton && '24px'};
`;

export const SpacerTitle = styled.div`
	border-top: 0.01px solid #ddd;
	margin-bottom: 15px;
	margin-top: 8px;
	margin-right: -3.5%;
	margin-left: -3.5%;
`;
