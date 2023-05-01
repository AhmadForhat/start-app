import { RefObject, useEffect } from 'react';

interface ChangeScreenSizeProps {
	onChange: () => void;
	dependencies?: RefObject<HTMLDivElement>[];
}

export const useChangeScreenSize = ({
	onChange,
	dependencies = [],
}: ChangeScreenSizeProps) => {
	useEffect(() => {
		window.addEventListener('resize', onChange);

		return () => {
			window.removeEventListener('resize', onChange);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [...dependencies]);
};
