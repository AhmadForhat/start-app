/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FilesAnimation } from 'designSystem/atoms/FilesAnimation';
import { Container, ContainerButton, ContainerResult } from './Results.styles';
import { useRecoilState } from 'recoil';
import { fieldsAtom, selectionsAtom } from 'context/RecoilAtoms';
import { api } from 'services';
import { Button } from 'designSystem';
import { useNavigate } from 'react-router-dom';

export const Results = () => {
	const [selections, setSelections] = useRecoilState<any>(selectionsAtom);
	const [_, setFields] = useRecoilState<any>(fieldsAtom);
	const [isLoading, setLoading] = useState(false);
	const [result, setResults] = useState({
		totalQuestions: 0,
		totalCorrect: 0,
	});
	const navigate = useNavigate();

	const goBack = () => {
		setSelections({});
		setFields({
			category: '',
			subject: '',
			level: '',
		});
		navigate('/select-fields');
	};

	const formattedSelections = Object.keys(selections).map((selectionKey) => ({
		questionId: selectionKey,
		answerId: selections[selectionKey],
	}));

	const validateResponse = async () => {
		setLoading(true);
		try {
			const allValidations = formattedSelections.map((selection) => {
				return api.post(`/questions/${selection.questionId}/verify`, {
					selectedOptionId: selection.answerId,
				});
			});

			const responses = await Promise.all(allValidations);

			const countTotalCorrect = responses.reduce((acc, current) => {
				if (current.data.correct) {
					return acc + 1;
				} else {
					return acc;
				}
			}, 0);

			const formattedResults = {
				totalQuestions: responses.length,
				totalCorrect: countTotalCorrect,
			};

			setResults(formattedResults);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		validateResponse();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Container>
			{isLoading ? (
				<>
					<FilesAnimation />
					<p>LOADING TEST RESULT ....</p>
				</>
			) : (
				<ContainerResult>
					<h3>Total questions: {result.totalQuestions}</h3>
					<h3>Total correct: {result.totalCorrect}</h3>
					<h3>Total wrong: {result.totalQuestions - result.totalCorrect}</h3>
					<ContainerButton>
						<Button text="Try again" onClick={goBack} />
					</ContainerButton>
				</ContainerResult>
			)}
		</Container>
	);
};
