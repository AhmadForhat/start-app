import axios from 'axios';

export const api = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		'Content-type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Credentials': true,
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
	},
});

api.interceptors.request.use(async (config: any) => {
	const token = window.localStorage.getItem('token');
	try {
		config.headers.Authorization = `Bearer ${token}`;
	} catch (e) {
		console.error('Unable to Token', e);
	}
	return config;
});

api.interceptors.response.use(
	(response) => {
		return response;
	},
	async function (error) {
		const notAuthorizedError = error.response.status === 401;
		const isNotLoginPage = window.location.pathname !== '/login';
		if (notAuthorizedError && isNotLoginPage) {
			window.localStorage.removeItem('token');
			window.location.assign('/login');
		}

		return Promise.reject(error);
	},
);
