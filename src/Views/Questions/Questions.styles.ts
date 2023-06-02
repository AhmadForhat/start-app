import styled from 'styled-components';
import { tokens } from 'designSystem';

export const Container = styled.div`
	background-color: ${tokens.color.primary.default};
	width: 100%;
	margin-top: 40px;
`;

export const ContainerQuestionProgressStatus = styled.div`
	width: 300.5px;
	height: 54.5px;
	color: white;
	font-family: ${tokens.fontFamily.default};
	margin: 27.5px auto 0px auto;
	display: flex;
	justify-content: space-between;
`;

export const QuestionProgressStatus1 = styled.div`
	height: 19px;
`;

export const QuestionProgressStatus2 = styled.div`
	height: 19px;
	font-weight: ${tokens.fontWeight.semiBold};
`;
export const ProgressBar = styled.div`
	width: 300.5px;
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
	width: 300px;
	height: 457px;
	background-color: white;
	margin: 60.5px auto 37px auto;
	.close-icon {
		width: 16px;
		height: 16px;
		display: flex;
		justify-content: flex-end;
		margin: 20px 20px 29px auto;
	}
`;

export const Question = styled.div`
	font-family: ${tokens.fontFamily.default};
	font-weight: ${tokens.fontWeight.semiBold};
	font-size: ${tokens.fontSize.medium};
	margin-left: 51px;
	margin-right: 10px;
`;

export const Options = styled.div``;

export const ContainerFooter = styled.div`
	height: 100%;
	display: flex;
	justify-content: space-between;
`;
