/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from 'react';

interface useClicouFechouProps {
	ref: any;
	backgroundRef?: any;
	onClose: (event: any) => void;
}

const useClickOutside = ({
	ref,
	backgroundRef,
	onClose,
}: useClicouFechouProps) => {
	const hasBackgroundRef = (event: any) =>
		backgroundRef?.current
			? !!backgroundRef?.current?.contains(event?.target)
			: true;
	const handleClickOutside = useCallback(
		(event: any) => {
			if (Array.isArray(ref) && ref.length) {
				const needToClose = ref.every((currentRef: any) => {
					return (
						currentRef.current &&
						!currentRef.current.contains(event.target) &&
						hasBackgroundRef(event)
					);
				});
				if (needToClose) {
					return onClose(event);
				}
			} else if (
				ref.current &&
				!ref.current.contains(event.target) &&
				hasBackgroundRef(event)
			) {
				return onClose(event);
			}

			return null;
		},
		[onClose],
	);

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);

		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [backgroundRef, onClose]);

	return {
		handleClickOutside,
	};
};

export default useClickOutside;
