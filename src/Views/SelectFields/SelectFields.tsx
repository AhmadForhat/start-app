import React, { useEffect, useState } from 'react';
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
import { api } from 'services';

export const SelectFields = () => {
	const navigate = useNavigate();
	const goToSelectLevel = () => navigate('/select-level');
	const [categories, setCategories] = useState<any>([]);
	const [fields, setFields] = useRecoilState(fieldsAtom);

	const handleChangeCategory = (value: string) =>
		setFields({ ...fields, category: value, subject: '' });

	const handleChangeSubject = (value: string) =>
		setFields({ ...fields, subject: value });

	const getFields = async () => {
		const { data } = await api.get('/categories');
		setCategories(data);
	};

	useEffect(() => {
		getFields();
	}, []);

	return (
		<Wrapper>
			<Container>
				<Navbar title="FIELD" />
				<ContainerLogo>
					<Logo />
				</ContainerLogo>
				<h2>SELECT CATEGORY</h2>
				{categories.map((category: any) => (
					<DropdownSelect
						key={category.id}
						onChangeCategory={handleChangeCategory}
						onChangeSubject={handleChangeSubject}
						selectedCategory={fields.category}
						selectedSubject={fields.subject}
						title={category.content}
						id={category._id}
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
