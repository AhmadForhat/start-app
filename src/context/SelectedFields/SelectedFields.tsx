import { createContext, useState, type ReactNode } from 'react';

export interface SelectedFieldContextProps {
	fields: string[];
	setFields: (e: any) => void;
}

export interface SelectedFieldProviderProps {
	children: ReactNode;
}

export const SelectedFieldContext = createContext<SelectedFieldContextProps>({
	fields: ['test1'],
	setFields: () => null,
});

export const SelectedFieldProvider = ({
	children,
}: SelectedFieldProviderProps): JSX.Element => {
	const [fields, setFields] = useState([]);

	return (
		<SelectedFieldContext.Provider
			value={{
				fields,
				setFields,
			}}
		>
			{children}
		</SelectedFieldContext.Provider>
	);
};
