import React, { useState } from 'react';
import {
	Container,
	ContainerDescription,
	ContainerPageInfo,
	ContainerIcon,
	Description,
	Title,
	ContainerSteps,
	Square,
	ContainerButton,
} from './WalkingThrough.styles';
import { Button, Wrapper } from 'designSystem';
import { useNavigate } from 'react-router-dom';
import { CloseIcon } from 'designSystem/icons';
import { ReactComponent as Diploma } from 'designSystem/icons/diploma.svg';
import { ReactComponent as DocTest } from 'designSystem/icons/doc-test.svg';
import { ReactComponent as TimeTracking } from 'designSystem/icons/time-tracking.svg';

export const WalkingThrough = () => {
	const [currentStep, setCurrentStep] = useState('getCertification');

	const navigate = useNavigate();

	const goToSelectFields = () => navigate('/select-fields');

	const stepProps = {
		getCertification: {
			id: 1,
			title: 'GET YOUR FREE CERTIFICATION',
			description:
				'Do a knowledge practice test in your field and become an expert',
			buttonText: 'CONTINUE',
			onNext: () => setCurrentStep('aboutTheTest'),
			icon: <Diploma />,
		},
		aboutTheTest: {
			id: 2,
			title: 'ABOUT THE TEST',
			description:
				'You will respond 30 multiple choice questions. There is only one correct answer per question',
			buttonText: 'CONTINUE',
			onNext: () => setCurrentStep('timer'),
			icon: <DocTest />,
		},
		timer: {
			id: 3,
			title: 'SET A TIMER',
			description:
				'Make sure to spend your time wisely! You will have 40 mins for completing the test',
			buttonText: 'GET STARTED',
			onNext: goToSelectFields,
			icon: <TimeTracking />,
		},
	}[currentStep];

	return (
		<Wrapper>
			<Container data-testid="walking-through">
				<ContainerIcon onClick={goToSelectFields}>
					<CloseIcon className="close-icon" />
				</ContainerIcon>
				<ContainerPageInfo>
					{stepProps?.icon}
					<ContainerSteps>
						<Square actived={stepProps?.id === 1} />
						<Square actived={stepProps?.id === 2} />
						<Square actived={stepProps?.id === 3} />
					</ContainerSteps>
				</ContainerPageInfo>
				<ContainerDescription>
					<Title>{stepProps?.title}</Title>
					<Description>{stepProps?.description}</Description>
				</ContainerDescription>
				<ContainerButton>
					<Button
						text={stepProps?.buttonText || ''}
						onClick={stepProps?.onNext}
						fullSize
					/>
				</ContainerButton>
			</Container>
		</Wrapper>
	);
};
