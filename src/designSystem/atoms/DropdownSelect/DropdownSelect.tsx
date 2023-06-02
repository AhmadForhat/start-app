import React, { useState } from 'react';
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

interface IDropdownSelect {
	title: string;
	sublist?: string[];
	onChangeCategory: (category: string) => void;
	onChangeSubject: (subject: string) => void;
	selectedCategory: string;
	selectedSubject: string;
}

export const DropdownSelect = ({
	title,
	sublist,
	onChangeCategory,
	onChangeSubject,
	selectedCategory,
	selectedSubject,
}: IDropdownSelect): JSX.Element => {
	const [isOpen, setOpen] = useState(false);
	const toggleOpen = () => {
		setOpen(!isOpen);
		!!sublist?.length && onChangeCategory(title);
	};

	const isActived = selectedCategory === title;

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
					{sublist?.map((item: string) => (
						<Item
							key={item}
							selected={selectedSubject === item}
							onClick={() => onChangeSubject(item)}
						>
							{item}
							<CheckIcon className="check-icon" />
						</Item>
					))}
				</List>
			)}
		</Container>
	);
};
