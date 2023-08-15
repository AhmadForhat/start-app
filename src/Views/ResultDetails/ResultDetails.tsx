import {
	buildStyles,
	CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import { Container, GradeCircle } from './ResultDetails.styles';
import { useRecoilState } from 'recoil';
import { fieldsAtom, selectionsAtom } from 'context/RecoilAtoms';
import { Navbar } from 'designSystem/molecules/Navbar';
import { Button, Wrapper } from 'designSystem';
import { useNavigate } from 'react-router-dom';

export const ResultDetails = () => {
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

	const rightOnes = 20;
	const fullgrade = 30;
	const grade = Math.round((rightOnes / fullgrade) * 100);

	return (
		<Wrapper>
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
			</Container>
		</Wrapper>
	);
};
