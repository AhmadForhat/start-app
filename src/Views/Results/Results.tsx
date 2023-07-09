import React from 'react';
import { FilesAnimation } from 'designSystem/atoms/FilesAnimation';
import { CircularProgressbar } from 'react-circular-progressbar';
import {
	Container,
	ContainerLoading,
	ContainerButtons,
	GradeCircle,
} from './Results.styles';
import { useRecoilState } from 'recoil';
import { fieldsAtom, selectionsAtom } from 'context/RecoilAtoms';
import { Navbar } from 'designSystem/molecules/Navbar';
import { Button, Wrapper } from 'designSystem';
import { useNavigate } from 'react-router-dom';

export const Results = () => {
	const navigate = useNavigate();
	const [selections] = useRecoilState<any>(selectionsAtom);
	const [fields] = useRecoilState<any>(fieldsAtom);
	const formattedSelections = Object.keys(selections).map((selectionKey) => ({
		questionId: selectionKey,
		answerId: selections[selectionKey],
	}));

	console.log(formattedSelections);
	console.log(fields);
	const goBack = () => navigate('/select-fields');
	const share = () => navigate('/select-fields');
	const viewResult = () => navigate('/questions');
	const startNew = () => navigate('/questions');
	const getCertified = () => navigate('/questions');

	const grade = 66;

	const isLoading = false;
	if (isLoading) {
		return (
			<ContainerLoading>
				<FilesAnimation />
				<p>LOADING TEST RESULT ....</p>
			</ContainerLoading>
		);
	} else {
		return (
			<Wrapper>
				<Navbar title="RESULT" onBack={goBack} share={share} />
				<Container>
					<GradeCircle>
						<CircularProgressbar
							value={grade}
							text={`${grade}%`}
							styles={{
								path: {
									// Path color
									stroke: `rgba(62, 152, 199, ${grade / 100})`,
									// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
									strokeLinecap: 'butt',
									// Customize transition animation
									transition: 'stroke-dashoffset 0.5s ease 0s',
									// Rotate the path
									transform: 'rotate(0.25turn)',
									transformOrigin: 'center center',
								},
								// Customize the circle behind the path, i.e. the "total progress"
								trail: {
									// Trail color
									stroke: '#7D837E',
									transformOrigin: 'center center',
									strokeWidth: '6px',
								},
								// Customize the text
								text: {
									// Text color
									fill: 'black',
									// Text size
									fontSize: '16px',
									position: 'absolute',
									// Adjust font
									fontFamily: 'Arial, sans-serif',
								},
								// Customize background - only used when the `background` prop is true
								background: {
									fill: '#E14A4A',
								},
							}}
						/>
					</GradeCircle>
					<h1>CONGRADUATIONS!</h1>
					<h2>Your Score</h2>
					<p>
						You Did a great job! Your ara ready for the next step. Get certifies
						by clicking below.
					</p>
					<ContainerButtons>
						<Button text={'CIEW TEST RESULT'} onClick={viewResult} fullSize />
						<Button text={'START NEW TEST'} onClick={startNew} fullSize />
						<Button text={'GET CERTIFIED'} onClick={getCertified} fullSize />
					</ContainerButtons>
				</Container>
			</Wrapper>
		);
	}
};
