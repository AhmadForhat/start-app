import React from 'react';
import { Container, PageTitle, PageTitleWrapper } from './SelectFields.styles';
import { DropdownSelect } from 'designSystem/atoms/DropdownSelect';
import { BackIcon, Html } from 'designSystem/icons';

export const SelectFields = () => {
	return (
		<Container>
			<PageTitle>
				<BackIcon className="back-icon" />
				<PageTitle className="page-title">FIELD</PageTitle>
			</PageTitle>
			<PageTitleWrapper />
			<DropdownSelect />
		</Container>
	);
};
