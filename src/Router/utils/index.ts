import { Results } from 'Views/Results';
import { Questions } from 'Views/Questions';
import { Home } from 'Views/Home';
import { WalkingThrough } from 'Views/WalkingThrough';

export const publicPages = [
	{
		id: 'home',
		name: 'Home',
		path: '/',
		element: Home,
	},
	{
		id: 'walking-through',
		name: 'Walking through',
		path: '/walking-through',
		element: WalkingThrough,
	},
	{
		id: 'questions',
		name: 'Questions',
		path: '/questions',
		element: Questions,
	},
	{
		id: 'results',
		name: 'Results',
		path: '/results',
		element: Results,
	},
];
