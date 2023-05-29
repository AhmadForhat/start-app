import React from 'react';
import {
	Container,
	ContainerDescription,
	ContainerPageInfo,
	Description1,
	Description2,
	Title,
	ContainerButton,
} from './ReadyPage.styles';
import { useNavigate } from 'react-router-dom';
import { Button } from 'designSystem';
import { Navbar } from 'designSystem/molecules/Navbar';
import timeTrackingImage from 'designSystem/assets/time-tracking.png';
import { SelectLevel } from 'Views/SelectLevel';

export const ReadyPage = () => {
	const navigate = useNavigate();

	const goToQuestions = () => navigate('/questions');

	return (
		<Container data-testid="walking-through">
			<Navbar onBack={SelectLevel} />
			<ContainerPageInfo>
				<img src={timeTrackingImage} alt="Time Tracking" />
			</ContainerPageInfo>
			<ContainerDescription>
				<Title>{'ARE YOU READY?'}</Title>
				<Description1>
					{'Make sure you have your phone notifications off for your test.'}
				</Description1>
				<Description2>{'Good Luck!'}</Description2>
			</ContainerDescription>
			<ContainerButton>
				<Button text={'READY'} onClick={goToQuestions} fullSize />
			</ContainerButton>
		</Container>
	);
};
