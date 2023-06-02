import styled from 'styled-components';

interface IContainerCollapseButton {
	isOpen?: boolean;
	actived?: boolean;
}

interface SublistSelected {
	selected?: boolean;
}

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ContainerCollapseButton = styled.button<IContainerCollapseButton>`
	width: 100%;
	height: 50px;
	background-color: ${({ actived }) => (actived ? '#C5002B' : 'white')};
	border: ${({ actived }) => (!actived ? '1px solid black' : 'none')};
	margin: 15px auto;
	display: flex;
	transition: all 0.5s;

	.up-down-icon {
		width: 24px;
		height: 24px;
		margin: auto 4%;
	}
`;

export const ContainerIcon = styled.button<IContainerCollapseButton>`
	height: 100%;
	width: 55px;
	background-color: rgba(0, 0, 0, 0);
	border: none;
	border-right: 1px solid ${({ actived }) => (!actived ? 'black' : 'white')};
	transition: all 0.5s;
`;

export const ContainerTitleAction = styled.button<IContainerCollapseButton>`
	background-color: rgba(0, 0, 0, 0);
	border: none;
	margin: auto;
	margin-left: 15px;
	margin-top: 15px;
	transition: all 0.5s;

	p {
		color: ${({ actived }) => actived && 'white'};
		font-size: 20px;
		position: absolute;
	}
`;

export const List = styled.div<IContainerCollapseButton>`
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	flex-direction: column;
	width: 100%;
	border: none;
	background-color: white;
	margin-top: -15px;
	transition: all 0.5s;
`;

export const Item = styled.button<SublistSelected>`
	display: flex;
	justify-content: space-between;
	width: calc(100% - 55px);
	color: ${({ selected }) => (selected ? 'black' : 'grey')};
	font-size: 18px;
	background-color: rgba(0, 0, 0, 0);
	border: 1px solid ${({ selected }) => (selected ? 'black' : 'grey')};
	padding: 12px 20px;
	transition: all 0.5s;

	.check-icon {
		width: 20px;
		opacity: ${({ selected }) => (selected ? '1' : '0')};
	}
`;
