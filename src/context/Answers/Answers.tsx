import { createContext, useState, type ReactNode } from 'react';

interface ISelection {
	questionId: string;
	answer: string;
}

export interface AnswersContextProps {
	selections: ISelection[] | [];
	setSelections: (e: any) => void;
}

export interface AnswersProviderProps {
	children: ReactNode;
}

export const AnswersContext = createContext<AnswersContextProps>({
	selections: [],
	setSelections: () => null,
});

export const AnswersProvider = ({
	children,
}: AnswersProviderProps): JSX.Element => {
	const [selections, setSelections] = useState<ISelection[] | []>([]);

	return (
		<AnswersContext.Provider
			value={{
				selections,
				setSelections,
			}}
		>
			{children}
		</AnswersContext.Provider>
	);
};
