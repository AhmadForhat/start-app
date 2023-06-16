import React from 'react';
import { FilesAnimation } from 'designSystem/atoms/FilesAnimation';
import { Container } from './Results.styles';
import { useRecoilState } from 'recoil';
import { fieldsAtom, selectionsAtom } from 'context/RecoilAtoms';

export const Results = () => {
	const [selections] = useRecoilState<any>(selectionsAtom);
	const [fields] = useRecoilState<any>(fieldsAtom);
	const formattedSelections = Object.keys(selections).map((selectionKey) => ({
		questionId: selectionKey,
		answerId: selections[selectionKey],
	}));

	console.log(formattedSelections);
	console.log(fields);
	return (
		<Container>
			<FilesAnimation />
			<p>LOADING TEST RESULT ....</p>
		</Container>
	);
};
