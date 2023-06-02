import styled from 'styled-components';

interface SublistSelected {
	selected?: boolean;
}

export const Container = styled.div`
	h2 {
		color: #000000;
		font-family: 'Myriad Pro', Arial, sans-serif;
		font-size: 22px;
		font-weight: normal;
	}
`;

export const ContainerLogo = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	svg {
		margin-top: 20px;
		margin-bottom: 45px;
	}
`;

export const ContainerButton = styled.div`
	margin: 60px 0px 110px 0px;
`;

export const ContainerList = styled.div`
	margin-top: 30px;
	display: flex;
	flex-direction: column;
	gap: 30px;
`;

export const Item = styled.button<SublistSelected>`
	width: 100%;
	color: ${({ selected }) => (selected ? 'black' : 'grey')};
	height: 50px;
	font-size: 18px;
	display: flex;
	background-color: rgba(0, 0, 0, 0);
	border: 1px solid ${({ selected }) => (selected ? 'black' : 'grey')};
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	transition: all 0.5s;
	.check-icon {
		width: 20px;
		opacity: ${({ selected }) => (selected ? '1' : '0')};
	}
`;
