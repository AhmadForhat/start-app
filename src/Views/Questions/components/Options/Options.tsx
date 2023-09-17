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
			{data.map((item: any) => {
				return (
					<ContainerOption key={item.optionId}>
						<input
							key={item._id}
							id={item._id}
							type="radio"
							name={`${questionId}-answer`}
							value={item._id}
							onChange={handleSelect}
							checked={actived === item._id}
						/>
						<label htmlFor={item._id}>{item.content}</label>
					</ContainerOption>
				);
			})}
		</Container>
	);
};
