import React from 'react';
import { ContainerTitle, SpacerTitle, Title } from './Navbar.styles';
import { BackIcon } from 'designSystem/icons';

interface INavBar {
	onBack?: () => void;
	title?: string;
}

export const Navbar = ({ onBack, title }: INavBar) => {
	return (
		<>
			<ContainerTitle>
				{onBack && (
					<button onClick={onBack}>
						<BackIcon className="back-icon" />
					</button>
				)}
				<Title className="page-title">{title}</Title>
			</ContainerTitle>
			<SpacerTitle />
		</>
	);
};
