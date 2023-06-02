import styled from 'styled-components';
import { tokens } from 'designSystem';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 30px 38px;
	background-color: ${tokens.color.primary.default};
	width: 100%;
	height: 100vh;
`;

export const ContainerTimerAndProgressBar = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 35px;
`;

export const ContainerQuestionProgressStatus = styled.div`
	width: 100%;
	color: white;
	font-family: ${tokens.fontFamily.default};
	margin: 27.5px auto 0px auto;
	display: flex;
	justify-content: space-between;
	gap: 24px;
`;

export const QuestionProgressStatus1 = styled.div`
	height: 19px;
`;

export const QuestionProgressStatus2 = styled.div`
	height: 19px;
	font-weight: ${tokens.fontWeight.semiBold};
`;
export const ProgressBar = styled.div`
	width: 100%;
	height: 0px;
	margin: auto;
	border-bottom: 1px white solid;
	display: flex;
`;

export const QuestionProgressStatus3 = styled.div`
	height: 4px;
	margin-top: -2px;
	background-color: white;
`;

export const ContainerQuestion = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	background-color: white;
	margin: 60.5px auto 37px auto;
	max-width: 820px;
	padding: 20px 20px 60px 20px;

	.close-icon {
		width: 16px;
		height: 16px;
		margin-left: auto;
	}
`;

export const Question = styled.div`
	display: flex;
	gap: 8px;
	font-family: ${tokens.fontFamily.default};
	font-weight: ${tokens.fontWeight.bold};
	font-size: ${tokens.fontSize.medium};
	margin-bottom: 40px;

	.number {
		color: ${tokens.color.primary.default};
	}

	.text {
		color: black;
	}
`;

export const ContainerFooter = styled.div`
	height: 100%;
	display: flex;
	justify-content: space-between;
`;
