import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 40px;
`;

export const PageTitle = styled.div`
	display: flex;
	justify-content: center;
	height: 33.5px;
	.back-icon {
		position: absolute;
		left: 0;
		margin-left: 30px;
		width: 24px;
		height: 24px;
	}
	.page-title {
		margin-top: 4px;
		font-size: 18px;
		font-family: 'Myriad Pro', Arial, sans-serif;
		color: black;
		border: none;
	}
`;

export const PageTitleWrapper = styled.div`
	border-top: 0.01px solid #ddd;
	margin-bottom: 15px;
`;
