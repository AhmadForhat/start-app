import React, { useEffect } from 'react';
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
import { Button, Wrapper } from 'designSystem';
import { Navbar } from 'designSystem/molecules/Navbar';
import timeTrackingImage from 'designSystem/assets/time-tracking.png';
import { fieldsAtom } from 'context/RecoilAtoms';
import { useRecoilState } from 'recoil';

export const ReadyPage = () => {
	const navigate = useNavigate();

	const goBack = () => navigate('/select-level');
	const goToQuestions = () => navigate('/questions');
	const goBackToTheStart = () => navigate('/select-fields');

	const [fields] = useRecoilState(fieldsAtom);

	useEffect(() => {
		if (!fields.category || !fields.subject) {
			goBackToTheStart();
		}

		if (!fields.subject) {
			goBack();
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fields]);

	return (
		<Wrapper>
			<Container data-testid="walking-through">
				<Navbar onBack={goBack} />
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
		</Wrapper>
	);
};
