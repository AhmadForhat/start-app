import React from 'react';

export interface ErrorFallbackProps {
	error: {
		message: string;
	};
	resetErrorBoundary: () => void;
}

export const ErrorFallback = ({
	error,
	resetErrorBoundary,
}: ErrorFallbackProps): JSX.Element => {
	return (
		<div role="alert">
			<p>Something went wrong:</p>
			<pre style={{ color: 'red' }}>{error.message}</pre>
			<button onClick={resetErrorBoundary}>Reset</button>
		</div>
	);
};
