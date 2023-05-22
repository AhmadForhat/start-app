import styled from 'styled-components';

interface IContainerCollapseButton {
	isOpen?: boolean;
}

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ContainerCollapseButton = styled.button<IContainerCollapseButton>`
	height: 50px;
	background-color: ${({ isOpen }) => isOpen && '#C5002B'};
	border: 1px solid ${({ isOpen }) => isOpen && 'none'};
	margin: 15px;
	display: flex;
	.up-down-icon {
		width: 24px;
		height: 24px;
		margin: auto;
	}
`;

export const ContainerIcon = styled.button<IContainerCollapseButton>`
	width: 50px;
	height: 50px;
	margin-left: 0px;
	.network-icon {
		background-color: ${({ isOpen }) => isOpen && '#C5002B'};
		svg {
			fill: ${({ isOpen }) => isOpen && 'white'};
		}
	}
`;

export const ContainerTitleAction = styled.button<IContainerCollapseButton>`
	background-color: ${({ isOpen }) => isOpen && '#C5002B'};
	/* color: ${({ isOpen }) => isOpen && 'none'}; */
	margin: auto;
`;

export const List = styled.ul``;

export const Item = styled.li``;
