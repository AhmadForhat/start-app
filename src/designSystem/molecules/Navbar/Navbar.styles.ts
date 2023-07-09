import styled from 'styled-components';

export const ContainerTitle = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	padding-bottom: 28px;

	button {
		background: none;
		border: none;
	}

	.back-icon {
		width: 24px;
		height: 24px;
	}
	.share {
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

interface SpacerTitleColorProps {
	lineColor?: string;
}

export const SpacerTitle = styled.div<SpacerTitleColorProps>`
	position: absolute;
	right: 0;
	top: 82px;
	width: 100%;
	height: 1px;
	background-color: ${({ lineColor }) => lineColor || '#ddd'};
`;
