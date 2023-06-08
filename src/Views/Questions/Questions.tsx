import React, { useEffect, useState } from 'react';
import {
	Container,
	ContainerQuestionProgressStatus,
	ContainerQuestion,
	ContainerFooter,
	QuestionProgressStatus1,
	QuestionProgressStatus2,
	Question,
	QuestionProgressStatus3,
	ProgressBar,
	ContainerTimerAndProgressBar,
} from './Questions.styles';
import { Navbar } from 'designSystem/molecules/Navbar';
import { useNavigate } from 'react-router-dom';
import { CloseIcon } from 'designSystem/icons';
import { Options } from './components/Options';

const QUESTIONS_LIST = [
	{
		id: '123',
		question: 'What are the features of Java programming languages?',
		options: [
			{
				id: '1',
				content: 'A lot of features',
			},
			{
				id: '2',
				content: 'Many features',
			},
			{
				id: '3',
				content: 'Another features',
			},
		],
	},
];

export const Questions = () => {
	const [{ min, sec }, setCount] = useState({ min: 40, sec: 0 });
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = 30;
	const progress = 60;
	const navigate = useNavigate();

	const goToResult = () => navigate('/results');
	const goBack = () => navigate('/select-fields');

	useEffect(() => {
		const timerId = setInterval(() => {
			if (min > 0 || sec > 0) {
				if (sec > 0) {
					setCount({ min: min, sec: sec - 1 });
				} else {
					setCount({ min: min - 1, sec: 59 });
				}
			} else {
				goToResult();
			}
		}, 1000);
		return () => {
			clearInterval(timerId);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [min, sec]);

	const currentQuestion = QUESTIONS_LIST[currentPage - 1];

	return (
		<Container>
			<Navbar lineColor="#707070" title="TEST" onBack={goBack} />
			<ContainerTimerAndProgressBar>
				<ContainerQuestionProgressStatus>
					<QuestionProgressStatus1>
						Question {currentPage} of {totalPages}
					</QuestionProgressStatus1>
					<QuestionProgressStatus2>
						{min}:{sec < 10 ? '0' + sec : sec}
					</QuestionProgressStatus2>
				</ContainerQuestionProgressStatus>
				<ProgressBar>
					<QuestionProgressStatus3 style={{ width: `${progress}%` }} />
				</ProgressBar>
			</ContainerTimerAndProgressBar>
			<ContainerQuestion>
				<CloseIcon className="close-icon" />
				<Question>
					<p className="number">{currentPage}</p>
					<p className="text">{currentQuestion.question}</p>
				</Question>
				<Options data={currentQuestion.options} onSelect={() => null} />
			</ContainerQuestion>
			<ContainerFooter>Skip</ContainerFooter>
		</Container>
	);
};
