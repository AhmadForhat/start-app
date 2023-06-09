import React from 'react';
import { ModalContainer } from 'designSystem/atoms/ModalContainer';
import { Button } from 'designSystem';
import { Container, ContainerButtons } from './QuitConfirmation.styles';

interface QuitConfirmationProps {
	isVisible: boolean;
	onClose: () => void;
	onSubmit: () => void;
}

export const QuitConfirmation = ({
	isVisible,
	onClose,
	onSubmit,
}: QuitConfirmationProps) => {
	return (
		<ModalContainer
			visible={isVisible}
			onClose={onClose}
			height="auto-complete"
		>
			<Container>
				<h2>Are you sure you want to quit?</h2>
				<p>
					If you quit, your progress might be lost. Do you still wish to quit?
				</p>
				<ContainerButtons>
					<Button variant="secondary" text="Yes" onClick={onSubmit} />
					<Button text="No" onClick={onClose} />
				</ContainerButtons>
			</Container>
		</ModalContainer>
	);
};
