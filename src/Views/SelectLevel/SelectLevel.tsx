import React, { useEffect, useState } from 'react';
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
import { Button, Wrapper } from 'designSystem';
import { CheckIcon } from 'designSystem/icons';
import { fieldsAtom } from 'context/RecoilAtoms';
import { useRecoilState } from 'recoil';
import { api } from 'services';

export const SelectLevel = () => {
	const navigate = useNavigate();
	const [levels, setLevels] = useState<any>([]);
	const goToStart = () => navigate('/ready-page');
	const goBack = () => navigate('/select-fields');
	const [fields, setFields] = useRecoilState(fieldsAtom);

	const handleChange = (item: string) => {
		setFields({ ...fields, level: item });
	};

	const getLevels = async () => {
		const { data } = await api.get(`/levels/subjects/${fields.subject}`);
		setLevels(data);
	};

	useEffect(() => {
		if (!fields.category || !fields.subject) {
			goBack();
		} else {
			getLevels();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fields]);

	const selectedItem = fields.level;

	return (
		<Wrapper>
			<Container>
				<Navbar onBack={goBack} title="LEVEL" />
				<ContainerLogo>
					<Logo />
				</ContainerLogo>
				<h2>SELECT LEVEL</h2>
				<ContainerList>
					{levels?.map((level: any) => (
						<Item
							key={level._id}
							selected={level._id === selectedItem}
							onClick={() => handleChange(level._id)}
						>
							{level.content}
							{level._id === selectedItem && (
								<CheckIcon className="check-icon" />
							)}
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
		</Wrapper>
	);
};
