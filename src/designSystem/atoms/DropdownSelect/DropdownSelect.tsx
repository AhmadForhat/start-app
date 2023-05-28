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
}

export const DropdownSelect = ({
	title,
	sublist,
}: IDropdownSelect): JSX.Element => {
	const [isOpen, setOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState<string | null>(null);
	const isOpenAndHaveSublist = isOpen && !!sublist?.length;

	const toggleOpen = () => setOpen(!isOpen);
	const selectItem = (item: string) => setSelectedItem(item);
	// const selectItem = (item: string) => {
	// 	if (!selectedItem) {
	// 		// If no category is selected, update the selected category
	// 		handleCategorySelect(item);
	// 	} else {
	// 		// If a category is already selected, update the selected subcategory
	// 		handleSubcategorySelect(item);
	// 	}
	// 	setSelectedItem(item);
	// };

	return (
		<Container>
			<ContainerCollapseButton
				onClick={toggleOpen}
				isOpen={isOpenAndHaveSublist}
			>
				<ContainerIcon onClick={toggleOpen} isOpen={isOpenAndHaveSublist}>
					{isOpenAndHaveSublist ? <ComputerWhite /> : <Computer />}
				</ContainerIcon>
				<ContainerTitleAction
					onClick={toggleOpen}
					isOpen={isOpenAndHaveSublist}
				>
					<p>{title}</p>
				</ContainerTitleAction>
				{isOpenAndHaveSublist ? (
					<UpIcon className="up-down-icon" />
				) : (
					<DownIcon className="up-down-icon" />
				)}
			</ContainerCollapseButton>
			{isOpenAndHaveSublist && (
				<List>
					{sublist.map((item: string) => (
						<Item
							key={item}
							selected={item === selectedItem}
							onClick={() => selectItem(item)}
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
