import { BackDropContainer, DrawerContainer } from './Drawer.styles';
import React from 'react';

export interface DrawerProps {
	id?: string;
	children?: React.ReactNode;
	open: boolean;
	clickOutToClose?: boolean;
	position?: 'left' | 'right' | 'top' | 'bottom';
	width?: string;
	height?: string;
	useBackDropContainer?: boolean;
	left?: string;
	top?: string;
	onClose: () => void;
}

export const Drawer = ({
	id,
	children,
	clickOutToClose,
	open,
	position,
	width,
	height,
	onClose,
	useBackDropContainer = true,
	left = '0',
	top = '0',
}: DrawerProps): JSX.Element => {
	const handleClose = () => {
		if (clickOutToClose) {
			onClose();
		}
	};

	return (
		<div>
			<DrawerContainer
				id={id}
				isOpen={open}
				position={position || 'left'}
				width={width}
				height={height}
				left={left}
				top={top}
			>
				<div>{children}</div>
			</DrawerContainer>
			{useBackDropContainer && (
				<BackDropContainer onClick={handleClose} isOpen={open} />
			)}
		</div>
	);
};
