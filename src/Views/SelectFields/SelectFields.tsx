import React from 'react';
import { Container } from './SelectFields.styles';
import { DropdownSelect } from 'designSystem/atoms/DropdownSelect';
import { Navbar } from 'designSystem/molecules/Navbar';

export const SelectFields = () => {
	return (
		<Container>
			<Navbar title="FIELD" />
			<DropdownSelect />
		</Container>
	);
};
