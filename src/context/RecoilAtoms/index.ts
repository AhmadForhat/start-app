import { atom } from 'recoil';

export const fieldsAtom = atom({
	key: 'fields',
	default: {
		category: '',
		subject: '',
		level: '',
	},
});

export const selectionsAtom = atom({
	key: 'selections',
	default: {},
});
