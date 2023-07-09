import React from 'react';
import { ContainerTitle, SpacerTitle, Title } from './Navbar.styles';
import { BackIcon } from 'designSystem/icons';
import { Share } from 'designSystem/icons';

interface INavBar {
	onBack?: () => void;
	share?: () => void;
	title?: string;
	lineColor?: string;
}

export const Navbar = ({ onBack, share, title, lineColor }: INavBar) => {
	return (
		<>
			<ContainerTitle>
				{onBack && (
					<button onClick={onBack}>
						<BackIcon className="back-icon" color="black" />
					</button>
				)}
				<Title hasBackButton={!!onBack} className="page-title">
					{title}
				</Title>
				{share && (
					<button onClick={share}>
						<Share className="share" />
					</button>
				)}
			</ContainerTitle>
			<SpacerTitle lineColor={lineColor} />
		</>
	);
};
