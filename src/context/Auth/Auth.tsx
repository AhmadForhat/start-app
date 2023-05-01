import { Loading } from 'designSystem';
import { createContext, useState, type ReactNode, useEffect } from 'react';

export interface AuthContextProps {
	setLoadingLoginVerification: (e: boolean) => void;
	isLoadingLoginVerification: boolean;
	setLogged: (e: boolean) => void;
	isLogged: boolean;
	saveContextSingIn: (e: boolean, token: string) => void;
	logOut: () => void;
}

export interface AuthProviderProps {
	children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({
	setLoadingLoginVerification: () => null,
	isLoadingLoginVerification: false,
	setLogged: () => null,
	isLogged: false,
	saveContextSingIn: () => null,
	logOut: () => null,
});

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
	useEffect(() => {
		const hasToken = window.localStorage.getItem('token');

		if (hasToken) {
			setLogged(true);
		}
	}, []);

	const [isLogged, setLogged] = useState(false);
	const [isLoadingLoginVerification, setLoadingLoginVerification] =
		useState(false);

	if (isLoadingLoginVerification) {
		return <Loading size={24} />;
	}

	const saveContextSingIn = (entering: boolean, token: string) => {
		if (entering) {
			window.localStorage.setItem('token', token);
			setLogged(true);
		}
	};

	const logOut = () => {
		window.localStorage.removeItem('token');
		setLogged(false);
	};

	return (
		<AuthContext.Provider
			value={{
				isLogged,
				setLogged,
				isLoadingLoginVerification,
				setLoadingLoginVerification,
				saveContextSingIn,
				logOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
