import styled, { css } from 'styled-components';
import React from 'react';

interface BackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
	ref: any;
	zIndex?: number;
}

interface ModalGroupProps extends React.HTMLAttributes<HTMLDivElement> {
	width?: string;
	zIndex?: number;
	height?: number | string;
	borderRadius: string;
	padding: string;
}

interface Props {
	fullScreenMobile?: boolean;
}

const cssModalFullScreen = css`
	@media (max-width: 540px) {
		width: 100%;
		height: 100vh;
		max-height: none;
		max-width: none;
		border-radius: 0px;
	}
`;
const cssContainerContent = css`
	@media (max-width: 540px) {
		width: 100%;
		height: 100vh;
		max-height: none;
		max-width: none;
		border-radius: 0px;

		box-sizing: border-box;
		padding: 0 24px;
	}
`;

export const ModalGroup = styled.div<ModalGroupProps & Props>`
	display: flex;
	flex-direction: column;
	z-index: 9999;
	position: fixed;
	float: left;
	width: 100%;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	max-height: ${({ height }) =>
		height ? 'calc(120px + ' + height + ')' : '500px'};
	height: ${({ height }) => height || '500px'};
	z-index: ${({ zIndex }) => zIndex};

	max-width: ${({ width }) => width || '360px'};
	width: 90%;
	background-color: #ffffff;
	box-shadow: -3px 0px 6px #00000029;
	border-radius: ${({ borderRadius }) => borderRadius};
	padding: ${({ padding }) => padding};

	${({ fullScreenMobile }) => fullScreenMobile && cssModalFullScreen};
`;

export const ContainerContent = styled.div<Props>`
	${({ fullScreenMobile }) => fullScreenMobile && cssContainerContent};
`;

export const Background = styled.div<BackgroundProps>`
	z-index: 1000;
	top: 0;
	right: 0;
	position: fixed;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: ${({ zIndex }) => zIndex};
`;

export const ContainerIcon = styled.div`
	position: absolute;
	background-color: #666666;
	padding: 12px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	transform: translate(-50%, 0);
	left: 50%;
	top: -30px;
`;
