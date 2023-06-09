import {
	Background,
	ContainerContent,
	ContainerIcon,
	ModalGroup,
} from './ModalContainer.styles';
import React from 'react';
import useModalContainer from './hooks/useModalContainer';
import { CloseIcon } from 'designSystem/icons';

export interface ModalContainerProps
	extends React.HTMLAttributes<HTMLDivElement> {
	id?: string;
	visible?: boolean;
	children: React.ReactNode | null;
	width?: string;
	onClose?: () => void;
	borderRadius?: string | undefined;
	padding?: string | undefined;
	zIndex?: number;
	height?: number | string;
	fullScreenMobile?: boolean;
	closeOnlyOnTheButton?: boolean;
	headerIcon?: React.ReactNode;
	hasCloseButton?: boolean;
}

export const ModalContainer: React.FC<ModalContainerProps> = ({
	id,
	visible,
	children,
	width,
	onClose,
	zIndex,
	height,
	fullScreenMobile,
	closeOnlyOnTheButton,
	headerIcon,
	hasCloseButton,
	borderRadius,
	padding,
}) => {
	const { modalRef, isOpenModal, backgroundRef } = useModalContainer({
		visible,
		onClose,
		closeOnlyOnTheButton,
	});

	return (
		<>
			{isOpenModal ? (
				<>
					<ModalGroup
						id={id}
						zIndex={zIndex}
						width={width}
						ref={modalRef}
						height={height}
						borderRadius={borderRadius || '6px'}
						padding={padding || '40px'}
						fullScreenMobile={fullScreenMobile}
					>
						{headerIcon && <ContainerIcon>{headerIcon}</ContainerIcon>}
						{hasCloseButton && (
							<div onClick={onClose}>
								<CloseIcon />
							</div>
						)}
						<ContainerContent fullScreenMobile={fullScreenMobile}>
							{children}
						</ContainerContent>
					</ModalGroup>
					<Background
						zIndex={zIndex ? zIndex - 1 : undefined}
						ref={backgroundRef}
					/>
				</>
			) : null}
		</>
	);
};
