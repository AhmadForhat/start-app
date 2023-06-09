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
	Code,
	MovetoQuestion,
} from './Questions.styles';
import { Navbar } from 'designSystem/molecules/Navbar';
import { useNavigate } from 'react-router-dom';
import { CloseIcon } from 'designSystem/icons';
import { BackIcon } from 'designSystem/icons';
import { NextIcon } from 'designSystem/icons';
import { Options } from './components/Options';
import { QuitConfirmation } from './components/QuitComfirmation';

// interface QuitConformation {
// 	clickedOn?: () => void;
// }

const QUESTIONS_LIST = Array.from({ length: 30 }, (_, i) => ({
	id: (i + 1).toString(),
	question: `What are the features of programming language ${i + 1}?`,
	code: `for i in ${i + 1}:\n\tprint(i)`,
	options: [
		{
			id: '1',
			content: `A lot of features for language ${i + 1}`,
		},
		{
			id: '2',
			content: `Many features for language ${i + 1}`,
		},
		{
			id: '3',
			content: `Another features for language ${i + 1}`,
		},
	],
}));

export const Questions = () => {
	const [{ min, sec }, setCount] = useState({ min: 40, sec: 0 });
	const [currentPage, setCurrentPage] = useState(1);
	// const [isclicked, setIsClicked] = useState(false);
	const totalPages = 30;
	const progress = 60;
	const navigate = useNavigate();

	const currentQuestion = QUESTIONS_LIST[currentPage - 1];

	const goToResult = () => navigate('/results');
	const goBack = () => navigate('/select-fields');
	const NextQuestion = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		} else {
			setCurrentPage(currentPage);
		}
	};
	const PreviousQuestion = () => {
		if (currentPage > 0) {
			setCurrentPage(currentPage - 1);
		} else {
			setCurrentPage(currentPage);
		}
	};

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
				<ContainerIcon onClick={goToSelectFields}>
					<CloseIcon className="close-icon" />
				</ContainerIcon>
				{clickedOn && <CloseIcon className="close-icon" />}
				<Question>
					<p className="number">
						{currentPage < 10 ? '0' + currentPage : currentPage}.
					</p>
					<p className="text">{currentQuestion.question}</p>
				</Question>
				<Code>
					<pre className="code">{currentQuestion.code}</pre>
				</Code>
				<Options data={currentQuestion.options} onSelect={() => null} />
			</ContainerQuestion>
			<ContainerFooter>
				{currentPage != totalPages ? (
					<p className="skip" onClick={NextQuestion}>
						<u>Skip</u>
					</p>
				) : (
					<p>
						<u></u>
					</p>
				)}
				<MovetoQuestion>
					<div onClick={PreviousQuestion}>
						<BackIcon className="back-icon" color="white" />
					</div>
					{currentPage != totalPages ? (
						<div onClick={NextQuestion}>
							<NextIcon className="next-icon" color="white" />
						</div>
					) : (
						<p className="submit" onClick={goToResult}>
							SUBMIT
						</p>
					)}
				</MovetoQuestion>
			</ContainerFooter>
		</Container>
	);
};
