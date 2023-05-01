import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { publicPages } from '.';
import { ThemeProvider } from 'styled-components';
import { tokens } from 'designSystem';

describe('Public pages', () => {
	publicPages.forEach(({ id, name, path, element: Component }) => {
		it(`renders ${name} page at ${path}`, () => {
			const { getByTestId } = render(
				<ThemeProvider theme={tokens}>
					<MemoryRouter initialEntries={[path]}>
						<Component />
					</MemoryRouter>
				</ThemeProvider>,
			);

			// Ensure the page content is rendered
			expect(getByTestId(id)).toBeInTheDocument();
		});
	});
});
