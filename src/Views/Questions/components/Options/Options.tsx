import React, { useState } from 'react';
import { Container, ContainerOption } from './Options.styles';

export interface Option {
	optionId: string;
	content: string;
}

interface OptionsProps {
	data: Option[];
	onSelect: (e: string) => void;
}

export const Options = ({ data, onSelect }: OptionsProps): JSX.Element => {
	const handleSelect = (e: any) => {
		onSelect(e.target.value);
	};

	return (
		<Container>
			{data.map((item) => (
				<ContainerOption key={item.optionId}>
					<input
						id={item.optionId}
						type="radio"
						name="aswern"
						value={item.optionId}
						onChange={handleSelect}
					/>
					<label htmlFor={item.optionId}>{item.content}</label>
				</ContainerOption>
			))}
		</Container>
	);
};
