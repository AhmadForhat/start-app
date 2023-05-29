import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Container,
	ContainerLogo,
	ContainerButton,
	Item,
} from './SelectLevel.styles';
import { Navbar } from 'designSystem/molecules/Navbar';
import { Logo } from 'designSystem/atoms/Logo';
import { Button } from 'designSystem';
import { CheckIcon } from 'designSystem/icons';
import { SelectFields } from 'Views/SelectFields';

const LEVEL_LIST = {
	item: ['BEGINNER', 'INTERMEDIATE', 'EXPERT'],
};

export const SelectLevel = () => {
	const navigate = useNavigate();
	const goToStart = () => navigate('/ready-page');
	const [selectedItem, setSelectedItem] = useState<string | null>(null);
	const selectItem = (item: string) => setSelectedItem(item);
	return (
		<Container>
			<Navbar onBack={SelectFields} title="LEVEL" />
			<ContainerLogo>
				<Logo />
			</ContainerLogo>
			<h2>SELECT LEVEL</h2>
			{LEVEL_LIST.item.map((item) => (
				<Item
					key={item}
					selected={item === selectedItem}
					onClick={() => selectItem(item)}
				>
					{item}
					{item === selectedItem && <CheckIcon className="check-icon" />}
				</Item>
			))}
			<ContainerButton>
				<Button text={'CONFIRM'} onClick={goToStart} fullSize />
			</ContainerButton>
		</Container>
	);
};
