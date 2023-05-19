import React, { useState } from 'react';
import {
	Container,
	ContainerCollapseButton,
	ContainerIcon,
	ContainerTitleAction,
	Item,
	List,
} from './DropdownSelect.styles';

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
				<ContainerIcon>Icon</ContainerIcon>
				<ContainerTitleAction>
					<p>{title}</p>
				</ContainerTitleAction>
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
