import { useState } from 'react';

const useAuth = () => {
	const [isLogged, setLogged] = useState(false);

	return {
		isLogged,
		setLogged,
	};
};

export default useAuth;
