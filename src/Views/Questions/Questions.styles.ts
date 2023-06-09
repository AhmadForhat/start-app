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
		margin-bottom: 29px;
	}
`;

export const Question = styled.div`
	display: flex;
	gap: 8px;
	font-family: ${tokens.fontFamily.default};
	font-size: ${tokens.fontSize.medium};

	.number {
		color: ${tokens.color.primary.default};
		font-weight: ${tokens.fontWeight.bold};
		line-height: 26px;
	}

	.text {
		font-weight: ${tokens.fontWeight.bold};
		color: black;
		line-height: 26px;
	}
`;

export const Code = styled.div`
	font-size: ${tokens.fontSize.small};
	padding: 10px 30px;
`;

export const ContainerFooter = styled.div`
	height: 40px;
	display: flex;
	margin-bottom: 32px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.skip {
		font-size: ${tokens.fontSize.medium};
		color: white;
		padding: 8px;
	}
`;

export const MovetoQuestion = styled.div`
	display: flex;
	gap: 2px;
	.back-icon {
		width: 40px;
		height: 40px;
		padding: 8px;
		background-color: rgba(255, 255, 255, 42%);
	}
	.next-icon {
		width: 40px;
		height: 40px;
		padding: 8px;
		background-color: rgba(255, 255, 255, 42%);
	}
	.submit {
		width: 155px;
		height: 44px;
		padding: 8px;
		margin-left: 15px;
		color: white;
		border: 2px solid white;
		margin-top: -2px;
		justify-content: center;
		text-align: center;
	}
`;
