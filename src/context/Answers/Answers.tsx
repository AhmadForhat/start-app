import { createContext, useState, ReactNode } from 'react';

export interface ResultContextProps {
	results: { [questionId: string]: string };
	setResults: (results: { [questionId: string]: string }) => void;
}

export interface ResultProviderProps {
	children: ReactNode;
}

export const ResultContext = createContext<ResultContextProps>({
	results: {},
	setResults: () => null,
});

export const ResultProvider = ({
	children,
}: ResultProviderProps): JSX.Element => {
	const [results, setResults] = useState({});

	return (
		<ResultContext.Provider
			value={{
				results,
				setResults,
			}}
		>
			{children}
		</ResultContext.Provider>
	);
};
