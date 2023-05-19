import React from 'react';
import {
	Container,
	ContainerTitle,
	PageTitleWrapper,
	Title,
} from './SelectFields.styles';
import { DropdownSelect } from 'designSystem/atoms/DropdownSelect';
import { BackIcon } from 'designSystem/icons';
import { useNavigate } from 'react-router-dom';

export const SelectFields = () => {
	const navigate = useNavigate();
	const goBack = () => navigate('/');

	return (
		<Container>
			<ContainerTitle>
				<button onClick={goBack}>
					<BackIcon className="back-icon" />
				</button>
				<Title className="page-title">FIELD</Title>
			</ContainerTitle>
			<PageTitleWrapper />
			<DropdownSelect />
		</Container>
	);
};
