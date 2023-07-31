import React from 'react';
import { ModalContainer } from 'designSystem/atoms/ModalContainer';
import { Button } from 'designSystem';
import { Container, ContainerButtons } from './StartNew.styles';

interface StartNewProps {
	isVisible: boolean;
	OnReTake: () => void;
	onNewTest: () => void;
}

export const StartNew = ({ isVisible, OnReTake, onNewTest }: StartNewProps) => {
	return (
		<ModalContainer visible={isVisible} height="auto-complete">
			<Container>
				<h2>Are you sure you want to quit?</h2>
				<p>
					If you quit, your progress might be lost. Do you still wish to quit?
				</p>
				<ContainerButtons>
					<Button
						variant="secondary"
						text="RETAKE SAME TEST"
						onClick={OnReTake}
					/>
					<Button text="NEW TEST" onClick={onNewTest} />
				</ContainerButtons>
			</Container>
		</ModalContainer>
	);
};
