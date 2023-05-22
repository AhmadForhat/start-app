import React from 'react';
import { Container } from './SelectFields.styles';
import { DropdownSelect } from 'designSystem/atoms/DropdownSelect';
import { Navbar } from 'designSystem/molecules/Navbar';
//import { Logo } from '';

const BUSINESS_ENUM = {
	title: 'BUSINESS',
};

const TECHNOLOGY_ENUM = {
	title: 'TECHNOLOGY',
	sublist: [
		'Python Developer',
		'Java Developer',
		'System Analyst',
		'Cyber Security Analyst',
		'Database Developer',
	],
};

export const SelectFields = () => {
	return (
		<Container>
			<Navbar title="FIELD" />
			<></>
			<DropdownSelect {...BUSINESS_ENUM} />
			<DropdownSelect {...TECHNOLOGY_ENUM} />
		</Container>
	);
};
