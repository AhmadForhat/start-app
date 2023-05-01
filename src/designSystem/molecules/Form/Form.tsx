import { ReactNode } from 'react';

export interface FormProps {
	onSubmit?: (values: any) => void;
	children?: ReactNode;
	id?: string;
	className?: string;
}

const getInputString = (inputId: string) => {
	return inputId.includes('input-')
		? inputId.split('input-')[1]
		: inputId.split('-input')[0];
};

export const Form = ({ onSubmit, children, id, className }: FormProps) => {
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const inputRefs = e?.target.querySelectorAll('input');

		let values = {};

		const setValueIntoForm = (inputRef: HTMLInputElement) => {
			if (inputRef?.getAttribute('id')) {
				const inputId = inputRef?.getAttribute('id');

				const formattedInputId = getInputString(inputId || '');

				values = {
					...values,
					[formattedInputId]: inputRef.value,
				};
			}
		};

		inputRefs.forEach(setValueIntoForm);

		onSubmit && onSubmit(values);
	};

	return (
		<form
			data-testid="ds-form"
			id={id}
			className={className}
			onSubmit={handleSubmit}
		>
			{children}
		</form>
	);
};
