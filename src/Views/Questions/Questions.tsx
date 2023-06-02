import React, { useEffect, useState } from 'react';
import {
	Container,
	ContainerQuestionProgressStatus,
	ContainerQuestion,
	ContainerFooter,
	QuestionProgressStatus1,
	QuestionProgressStatus2,
	Question,
	Options,
	QuestionProgressStatus3,
	ProgressBar,
} from './Questions.styles';
import { Navbar } from 'designSystem/molecules/Navbar';
import { SelectLevel } from 'Views/SelectLevel';
import { useNavigate } from 'react-router-dom';
import { CloseIcon } from 'designSystem/icons';

const LEVEL_LIST = {
	questions: ['What are the features of Java programming languages?'],
};

export const Questions = () => {
	const [{ min, sec }, setCount] = useState({ min: 40, sec: 0 });
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = 30;
	const progress = 60;
	const navigate = useNavigate();
	const goToResult = () => navigate('/results');
	useEffect(() => {
		const timerId = setInterval(() => {
			if (min > 0 || sec > 0) {
				if (sec > 0) {
					setCount({ min: min, sec: sec - 1 });
				} else {
					setCount({ min: min - 1, sec: 60 });
				}
			} else {
				goToResult();
			}
		}, 1000);
		return () => {
			clearInterval(timerId);
		};
	}, [goToResult, min, sec]);
	return (
		<Container>
			<Navbar title="TEST" onBack={SelectLevel} />
			<ContainerQuestionProgressStatus>
				<QuestionProgressStatus1>
					Question {currentPage} of {totalPages}
				</QuestionProgressStatus1>
				<QuestionProgressStatus2>
					{min}:{sec < 10 ? '0' + sec : sec}
				</QuestionProgressStatus2>
			</ContainerQuestionProgressStatus>
			<ProgressBar>
				<QuestionProgressStatus3
					style={{ width: `${progress}%` }}
				></QuestionProgressStatus3>
			</ProgressBar>
			<ContainerQuestion>
				<CloseIcon className="close-icon" />
				<Question>
					What are the features of Java programming languages?
				</Question>
				<Options />
			</ContainerQuestion>
			<ContainerFooter>Skip</ContainerFooter>
		</Container>
	);
};
