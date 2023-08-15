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
				<h2>Which test you want to START?</h2>
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
