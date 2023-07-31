import React, { useEffect, useState } from 'react';
import { FilesAnimation } from 'designSystem/atoms/FilesAnimation';
import {
	buildStyles,
	CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
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
import { StartNew } from './components/StartNew/StartNew';

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

	const [isModalOpen, setModalOpen] = useState(false);
	const ReTake = () => navigate('/questions');
	const NewTest = () => navigate('/select-fields');

	const rightOnes = 20;
	const fullgrade = 30;
	const grade = Math.round((rightOnes / fullgrade) * 100);

	const handleNewTest = () => {
		setModalOpen(true);
	};

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
				<StartNew
					isVisible={isModalOpen}
					OnReTake={ReTake}
					onNewTest={NewTest}
				/>
				<Navbar title="RESULT" onBack={goBack} share={share} />
				<Container>
					<GradeCircle>
						<CircularProgressbarWithChildren
							value={grade}
							styles={buildStyles({
								pathColor: '#E14A4A',
								trailColor: '#7D837E',
								strokeLinecap: 'butt',
								pathTransition: 'stroke-dashoffset 0.5s ease 0s',
							})}
						>
							<div
								style={{
									fontSize: '16px',
									fontFamily: 'poppins, Arial, sans-serif',
									fontWeight: '200',
								}}
							>
								{grade}%
							</div>
						</CircularProgressbarWithChildren>
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
						<Button
							text={'VIEW TEST RESULT'}
							onClick={viewResult}
							fullSize
							background_color={'white'}
							text_color={'black'}
						/>
						<div onClick={handleNewTest}>
							<Button
								text={'START NEW TEST'}
								fullSize
								background_color="grey"
							/>
						</div>
						<Button text={'GET CERTIFIED'} onClick={getCertified} fullSize />
					</ContainerButtons>
				</Container>
			</Wrapper>
		);
	}
};
