import React from 'react';
import { FilesAnimation } from 'designSystem/atoms/FilesAnimation';
import { Container } from './Results.styles';

export const Results = () => {
	return (
		<Container>
			<FilesAnimation />
			<p>LOADING TEST RESULT ....</p>
		</Container>
	);
};
