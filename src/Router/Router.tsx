// import { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import { AuthContext } from 'context/Auth';
import { publicPages } from './utils';

import { Wrapper } from 'designSystem';

const Router = (): JSX.Element => {
	// const { isLogged } = useContext(AuthContext);

	const publicPagesFormatted = publicPages.map((page) => ({
		path: page.path,
		element: (
			<>
				<page.element />
			</>
		),
	}));

	const publicRoutes = createBrowserRouter(publicPagesFormatted);

	const routes = publicRoutes;

	return (
		<Wrapper>
			<RouterProvider data-testid="router-provider" router={routes} />
		</Wrapper>
	);
};

export default Router;
