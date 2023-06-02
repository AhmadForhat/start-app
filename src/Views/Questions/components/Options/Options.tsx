import React, { useState } from 'react';
import { Container, ContainerOption } from './Options.styles';

export interface Option {
	id: string;
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
				<ContainerOption key={item.id}>
					<input
						id={item.id}
						type="radio"
						name="aswern"
						value={item.id}
						onChange={handleSelect}
					/>
					<label htmlFor={item.id}>{item.content}</label>
				</ContainerOption>
			))}
		</Container>
	);
};
