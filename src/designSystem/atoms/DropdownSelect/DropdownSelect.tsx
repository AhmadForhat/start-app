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

interface IDropdownSelect {
	title: string;
	sublist?: string[];
}

export const DropdownSelect = ({
	title,
	sublist,
}: IDropdownSelect): JSX.Element => {
	const [isOpen, setOpen] = useState(false);
	const isOpenAndHaveSublist = isOpen && !!sublist?.length;

	const toggleOpen = () => setOpen(!isOpen);

	return (
		<Container>
			<ContainerCollapseButton
				onClick={toggleOpen}
				isOpen={isOpenAndHaveSublist}
			>
				<ContainerIcon>
					<NetworkIcon className="network-icon" />
				</ContainerIcon>
				<ContainerTitleAction>
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
						<Item key={item}>{item}</Item>
					))}
				</List>
			)}
		</Container>
	);
};
