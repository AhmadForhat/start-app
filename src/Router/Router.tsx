import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { publicPages } from './utils';

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

	return <RouterProvider data-testid="router-provider" router={routes} />;
};

export default Router;
