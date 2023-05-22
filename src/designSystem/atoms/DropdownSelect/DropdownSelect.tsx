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
import { NetworkIcon } from 'designSystem/icons';
import { CheckIcon } from 'designSystem/icons';

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

	return (
		<Container>
			<ContainerCollapseButton
				onClick={toggleOpen}
				isOpen={isOpenAndHaveSublist}
			>
				<ContainerIcon onClick={toggleOpen} isOpen={isOpenAndHaveSublist}>
					{isOpenAndHaveSublist ? (
						<NetworkIcon className="network-icon" color="white" />
					) : (
						<NetworkIcon className="network-icon" color="#C5002B" />
					)}
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
				<List className="children">
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
