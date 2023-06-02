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
import { Button, Wrapper } from 'designSystem';
import { useRecoilState } from 'recoil';
import { fieldsAtom } from 'context/RecoilAtoms';

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

const DIGITAL_MARKETING_ENUM = {
	title: 'DIGITAL MARKETING',
};

const HOSPITALITY_ENUM = {
	title: 'HOSPITALITY',
};

const SOFT_SKILLS_ENUM = {
	title: 'SOFT SKILLS',
};

const fieldsCategoryAndSubjects = [
	BUSINESS_ENUM,
	TECHNOLOGY_ENUM,
	DIGITAL_MARKETING_ENUM,
	HOSPITALITY_ENUM,
	SOFT_SKILLS_ENUM,
];

export const SelectFields = () => {
	const navigate = useNavigate();
	const goToSelectLevel = () => navigate('/select-level');
	const [fields, setFields] = useRecoilState(fieldsAtom);

	const handleChangeCategory = (value: string) =>
		setFields({ ...fields, category: value, subject: '' });

	const handleChangeSubject = (value: string) =>
		setFields({ ...fields, subject: value });

	return (
		<Wrapper>
			<Container>
				<Navbar title="FIELD" />
				<ContainerLogo>
					<Logo />
				</ContainerLogo>
				<h2>SELECT CATEGORY</h2>
				{fieldsCategoryAndSubjects.map((fieldCategoryAndSubjects) => (
					<DropdownSelect
						key={fieldCategoryAndSubjects.title}
						onChangeCategory={handleChangeCategory}
						onChangeSubject={handleChangeSubject}
						selectedCategory={fields.category}
						selectedSubject={fields.subject}
						{...fieldCategoryAndSubjects}
					/>
				))}
				<ContainerButton>
					<Button
						text={'CONFIRM'}
						onClick={goToSelectLevel}
						fullSize
						disabled={!fields.category || !fields.subject}
					/>
				</ContainerButton>
			</Container>
		</Wrapper>
	);
};
