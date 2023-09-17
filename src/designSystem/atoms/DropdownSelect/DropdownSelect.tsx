import React, { useEffect, useState } from 'react';
import {
	Container,
	ContainerCollapseButton,
	ContainerIcon,
	ContainerTitleAction,
	Item,
	List,
} from './DropdownSelect.styles';
import { DownIcon } from 'designSystem/icons';
import { UpIcon } from 'designSystem/icons';
import { CheckIcon } from 'designSystem/icons';
import { Computer } from 'designSystem/icons';
import { ComputerWhite } from 'designSystem/icons';
import { api } from 'services';

interface IDropdownSelect {
	id: string;
	title: string;
	onChangeCategory: (category: string) => void;
	onChangeSubject: (subject: string) => void;
	selectedCategory: string;
	selectedSubject: string;
}

export const DropdownSelect = ({
	id,
	title,
	onChangeCategory,
	onChangeSubject,
	selectedCategory,
	selectedSubject,
}: IDropdownSelect): JSX.Element => {
	const [isOpen, setOpen] = useState(false);
	const [subjects, setSubjects] = useState<any>([]);
	const toggleOpen = () => {
		setOpen(!isOpen);
		onChangeCategory(id);
	};

	const isActived = selectedCategory === id;

	const getSubjects = async () => {
		const { data } = await api(`/subjects/categories/${id}`);
		setSubjects(data);
	};

	useEffect(() => {
		if (isOpen) {
			getSubjects();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen]);

	return (
		<Container>
			<ContainerCollapseButton onClick={toggleOpen} actived={isActived}>
				<ContainerIcon onClick={toggleOpen} actived={isActived}>
					{isActived ? <ComputerWhite /> : <Computer />}
				</ContainerIcon>
				<ContainerTitleAction onClick={toggleOpen} actived={isActived}>
					<p>{title}</p>
				</ContainerTitleAction>
				{isActived && isOpen ? (
					<UpIcon className="up-down-icon" />
				) : (
					<DownIcon className="up-down-icon" />
				)}
			</ContainerCollapseButton>
			{isActived && isOpen && (
				<List>
					{subjects?.map((subject: any) => (
						<Item
							key={subject._id}
							selected={selectedSubject === subject._id}
							onClick={() => onChangeSubject(subject._id)}
						>
							{subject.content}
							<CheckIcon className="check-icon" />
						</Item>
					))}
				</List>
			)}
		</Container>
	);
};
