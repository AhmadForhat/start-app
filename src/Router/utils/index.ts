import { Results } from 'Views/Results';
import { Questions } from 'Views/Questions';
import { WalkingThrough } from 'Views/WalkingThrough';
import { SelectFields } from 'Views/SelectFields';

export const publicPages = [
	{
		id: 'walking-through',
		name: 'Walking through',
		path: '/',
		element: WalkingThrough,
	},
	{
		id: 'select-fields',
		name: 'Select Fields',
		path: '/select-fields',
		element: SelectFields,
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
