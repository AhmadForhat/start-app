import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Container,
	ContainerLogo,
	ContainerButton,
	Item,
	ContainerList,
} from './SelectLevel.styles';
import { Navbar } from 'designSystem/molecules/Navbar';
import { Logo } from 'designSystem/atoms/Logo';
import { Button } from 'designSystem';
import { CheckIcon } from 'designSystem/icons';
import { fieldsAtom } from 'context/RecoilAtoms';
import { useRecoilState } from 'recoil';

const LEVEL_LIST = {
	item: ['BEGINNER', 'INTERMEDIATE', 'EXPERT'],
};

export const SelectLevel = () => {
	const navigate = useNavigate();
	const goToStart = () => navigate('/ready-page');
	const goBack = () => navigate('/select-fields');
	const [fields, setFields] = useRecoilState(fieldsAtom);

	const handleChange = (item: string) => {
		setFields({ ...fields, level: item });
	};

	useEffect(() => {
		if (!fields.category || !fields.subject) {
			goBack();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fields]);

	const selectedItem = fields.level;

	return (
		<Container>
			<Navbar onBack={goBack} title="LEVEL" />
			<ContainerLogo>
				<Logo />
			</ContainerLogo>
			<h2>SELECT LEVEL</h2>
			<ContainerList>
				{LEVEL_LIST.item.map((item) => (
					<Item
						key={item}
						selected={item === selectedItem}
						onClick={() => handleChange(item)}
					>
						{item}
						{item === selectedItem && <CheckIcon className="check-icon" />}
					</Item>
				))}
			</ContainerList>
			<ContainerButton>
				<Button
					text={'CONFIRM'}
					onClick={goToStart}
					fullSize
					disabled={!selectedItem}
				/>
			</ContainerButton>
		</Container>
	);
};
