import styled from 'styled-components';

interface IContainerCollapseButton {
	isOpen?: boolean;
}

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ContainerCollapseButton = styled.button<IContainerCollapseButton>`
	background-color: ${({ isOpen }) => isOpen && '#C5002B'};
	border: 1px solid black;
`;

export const ContainerIcon = styled.div``;

export const ContainerTitleAction = styled.div``;

export const List = styled.ul``;

export const Item = styled.li``;
