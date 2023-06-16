import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { RecoilRoot } from 'recoil';

import { ErrorFallback } from 'designSystem';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Router from './Router';
import { GlobalStyle } from 'designSystem/themes/GlobalStyle';
import { AuthProvider } from 'context/Auth';
import { ThemeProvider } from 'styled-components';
import { tokens } from 'designSystem/themes/tokens';
import { SelectedFieldProvider } from 'context/SelectedFields';
import { AnswersProvider } from 'context/Answers';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);

root.render(
	<React.StrictMode>
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<ThemeProvider theme={tokens}>
				<GlobalStyle />
				<AnswersProvider>
					<SelectedFieldProvider>
						<AuthProvider>
							<RecoilRoot>
								<Router />
							</RecoilRoot>
						</AuthProvider>
					</SelectedFieldProvider>
				</AnswersProvider>
			</ThemeProvider>
		</ErrorBoundary>
	</React.StrictMode>,
);

serviceWorkerRegistration.register();
