import React from 'react';
import { ContainerTitle, SpacerTitle, Title } from './Navbar.styles';
import { BackIcon } from 'designSystem/icons';

interface INavBar {
	onBack?: () => void;
	title?: string;
	lineColor?: string;
}

export const Navbar = ({ onBack, title, lineColor }: INavBar) => {
	return (
		<>
			<ContainerTitle>
				{onBack && (
					<button onClick={onBack}>
						<BackIcon className="back-icon" />
					</button>
				)}
				<Title hasBackButton={!!onBack} className="page-title">
					{title}
				</Title>
			</ContainerTitle>
			<SpacerTitle lineColor={lineColor} />
		</>
	);
};
