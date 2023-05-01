import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
`;

interface SpinnerProps {
	size: string | number;
}

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Spinner = styled.div<SpinnerProps>`
	display: inline-block;
	width: ${(props) => props.size}px;
	height: ${(props) => props.size}px;
	border-radius: 50%;
	border: 2px solid #fff;
	border-top-color: #3498db;
	animation: ${spin} 1s linear infinite;
	margin: auto;
`;

export const Loading = ({ size }: SpinnerProps) => {
	return (
		<Container>
			<Spinner size={size} />
		</Container>
	);
};
