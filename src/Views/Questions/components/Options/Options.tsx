import React from 'react';
import { Container, ContainerOption } from './Options.styles';

export interface Option {
	optionId: string;
	content: string;
}

interface OptionsProps {
	data: Option[];
	onSelect: (e: string) => void;
	questionId: string;
	actived: string;
}

export const Options = ({
	data,
	onSelect,
	questionId,
	actived,
}: OptionsProps): JSX.Element => {
	const handleSelect = (e: any) => {
		onSelect(e.target.value);
	};

	return (
		<Container>
			{data.map((item) => {
				return (
					<ContainerOption key={item.optionId}>
						<input
							key={item.optionId}
							id={item.optionId}
							type="radio"
							name={`${questionId}-answer`}
							value={item.optionId}
							onChange={handleSelect}
							checked={actived === item.optionId}
						/>
						<label htmlFor={item.optionId}>{item.content}</label>
					</ContainerOption>
				);
			})}
		</Container>
	);
};
