import React from 'react';
import { render } from '@testing-library/react';
import { Form } from './Form';

describe('Form', () => {
	const onSubmit = jest.fn();

	afterEach(() => {
		onSubmit.mockClear();
	});

	it('should render form with children', () => {
		const { getByTestId } = render(
			<Form onSubmit={onSubmit}>
				<input data-testid="input-1" />
				<button data-testid="submit-btn">Submit</button>
			</Form>,
		);
		const form = getByTestId('ds-form');
		const input = getByTestId('input-1');
		const button = getByTestId('submit-btn');

		expect(form).toBeInTheDocument();
		expect(input).toBeInTheDocument();
		expect(button).toBeInTheDocument();
	});
});
