import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Container,
	ContainerLogo,
	ContainerButton,
} from './SelectFields.styles';
import { DropdownSelect } from 'designSystem/atoms/DropdownSelect';
import { Navbar } from 'designSystem/molecules/Navbar';
import { Logo } from 'designSystem/atoms/Logo';
import { Button } from 'designSystem';

const BUSINESS_ENUM = {
	title: 'BUSINESS',
	sublist: ['Example1', 'Example2'],
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
const DIGITAL_MARKETING_ENUM = {
	title: 'DIGITAL MARKETING',
	sublist: ['Example1'],
};
const HOSPITALITY_ENUM = {
	title: 'HOSPITALITY',
	sublist: [
		'Example1',
		'Example2',
		'Example3',
		'Example4',
		'Example5',
		'Example6',
	],
};
const SOFT_SKILLS_ENUM = {
	title: 'SOFT SKILLS',
	sublist: ['Example1', 'Example2', 'Example3'],
};

export const SelectFields = () => {
	const navigate = useNavigate();
	const goToSelectLevel = () => navigate('/select-level');
	return (
		<Container>
			<Navbar title="FIELD" />
			<ContainerLogo>
				<Logo />
			</ContainerLogo>
			<h2>SELECT CATEGORY</h2>
			<DropdownSelect {...BUSINESS_ENUM} />
			<DropdownSelect {...TECHNOLOGY_ENUM} />
			<DropdownSelect {...DIGITAL_MARKETING_ENUM} />
			<DropdownSelect {...HOSPITALITY_ENUM} />
			<DropdownSelect {...SOFT_SKILLS_ENUM} />
			<ContainerButton>
				<Button text={'CONFIRM'} onClick={goToSelectLevel} fullSize />
			</ContainerButton>
		</Container>
	);
};
