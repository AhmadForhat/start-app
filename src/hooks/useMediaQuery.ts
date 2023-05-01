/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';

const isClient = !!(
	typeof window !== 'undefined' &&
	window.document &&
	window.document.createElement
);

const isAPISupported = (api: string): boolean =>
	typeof window !== 'undefined' ? api in window : false;

const errorMessage =
	'matchMedia is not supported, this could happen both because window.matchMedia is not supported by' +
	" your current browser or you're using the useMediaQuery hook whilst server side rendering.";

const useMediaQuery = (mediaQuery: string) => {
	if (!isClient || !isAPISupported('matchMedia')) {
		console.warn(errorMessage);
		return false;
	}

	const [isVerified, setIsVerified] = useState(
		!!window.matchMedia(mediaQuery).matches,
	);

	useEffect(() => {
		const mediaQueryList = window.matchMedia(mediaQuery);
		const documentChangeHandler = () => setIsVerified(!!mediaQueryList.matches);

		try {
			mediaQueryList.addEventListener('change', documentChangeHandler);
		} catch (e) {
			mediaQueryList.addListener(documentChangeHandler);
		}

		documentChangeHandler();
		return () => {
			try {
				mediaQueryList.removeEventListener('change', documentChangeHandler);
			} catch (e) {
				mediaQueryList.removeListener(documentChangeHandler);
			}
		};
	}, [mediaQuery]);

	return isVerified;
};

export default useMediaQuery;
