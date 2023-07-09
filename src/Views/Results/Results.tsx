import React from 'react';
import { FilesAnimation } from 'designSystem/atoms/FilesAnimation';
import { CircularProgressbar } from 'react-circular-progressbar';
import {
	Container,
	ContainerLoading,
	ContainerButtons,
	GradeCircle,
	Texts,
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

	const grade = 60;
	const rightOnes = 22;

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
									stroke: `#E14A4A`,
									transition: 'stroke-dashoffset 0.5s ease 0s',
									strokeWidth: '6px',
								},
								trail: {
									stroke: '#7D837E',
									transformOrigin: 'center center',
									strokeWidth: '6px',
								},
								text: {
									fontSize: '14px',
									textAlign: 'center',
									fontFamily: 'Myriad Pro, Arial, sans-serif',
								},
							}}
						/>
					</GradeCircle>
					<Texts>
						<p className="t1">CONGRADUATIONS!</p>
						<p className="t2">Your Score</p>
						<p>
							<span className="t3">{rightOnes}</span> / 30
						</p>
						<p className="t4">
							You Did a great job! Your ara ready for the next step. Get
							certifies by clicking below.
						</p>
					</Texts>
					<ContainerButtons>
						<Button text={'VIEW TEST RESULT'} onClick={viewResult} fullSize />
						<Button text={'START NEW TEST'} onClick={startNew} fullSize />
						<Button text={'GET CERTIFIED'} onClick={getCertified} fullSize />
					</ContainerButtons>
				</Container>
			</Wrapper>
		);
	}
};
