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
import { useRecoilState } from 'recoil';
import { fieldsAtom, selectionsAtom } from 'context/RecoilAtoms';
import { api } from 'services';

export const Questions = () => {
	const [{ min, sec }, setCount] = useState({ min: 40, sec: 0 });
	const [currentPage, setCurrentPage] = useState(1);
	const [isConfirmExitModalOpen, setConfirmExitModalOpen] = useState(false);
	const [selections, setSelections] = useRecoilState<any>(selectionsAtom);
	const navigate = useNavigate();
	const [fields] = useRecoilState(fieldsAtom);
	const [questions, setQuestions] = useState<any>([]);
	const [currentQuestion, setCurrentQuestion] = useState<any>({
		options: [],
		title: '',
	});

	const totalPages = questions.length;

	const progress = ((Object.keys(selections).length + 1) / totalPages) * 100;

	const goBack = () => navigate('/select-level');

	const goToResult = () => navigate('/results');
	const handleNextQuestion = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};
	const handlePreviousQuestion = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const getQuestions = async () => {
		const { data } = await api.get(
			`/questions/subjects/${fields.subject}/levels/${fields.level}`,
		);

		setQuestions(data);
	};

	useEffect(() => {
		if (fields.subject && fields.level) {
			getQuestions();
		} else {
			goBack();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fields]);

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

	const handleSkip = () => {
		setConfirmExitModalOpen(true);
	};

	useEffect(() => {
		if (questions.length) {
			setCurrentQuestion(questions[currentPage - 1]);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [questions, currentPage]);

	return (
		<>
			<QuitConfirmation
				isVisible={isConfirmExitModalOpen}
				onClose={() => setConfirmExitModalOpen(false)}
				onSubmit={goToResult}
			/>
			<Container>
				<Navbar lineColor="#707070" title="TEST" />
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
					<div onClick={handleSkip} className="close-icon">
						<CloseIcon className="close-icon" />
					</div>
					<Question>
						<p className="number">
							{currentPage < 10 ? '0' + currentPage : currentPage}.
						</p>
						<p className="text">{currentQuestion.title}</p>
					</Question>
					<Code>
						<pre className="code">{currentQuestion.code}</pre>
					</Code>
					<Options
						data={currentQuestion.options}
						questionId={currentQuestion.id}
						actived={selections[currentQuestion.id]}
						onSelect={(e) => {
							setSelections({
								...selections,
								[currentQuestion.id]: e,
							});
						}}
					/>
				</ContainerQuestion>
				<ContainerFooter>
					{currentPage != totalPages ? (
						<p className="skip" onClick={handleSkip}>
							<u>Skip</u>
						</p>
					) : (
						<p>
							<u></u>
						</p>
					)}
					<MovetoQuestion>
						<div onClick={handlePreviousQuestion}>
							<BackIcon className="back-icon" color="white" />
						</div>
						{currentPage != totalPages ? (
							<div onClick={handleNextQuestion}>
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
		</>
	);
};
