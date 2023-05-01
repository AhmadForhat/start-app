export const sanitize = (obj: any) => {
	return JSON.parse(
		JSON.stringify(obj, (key, value) => {
			return value === null ? undefined : value;
		}),
	);
};
