import { useCallback, useEffect, useRef, useState } from 'react';

import useClickOutside from './useClickOutside';

interface useModalContainerProps {
	visible?: boolean;
	closeOnlyOnTheButton?: boolean;
	onClose?: () => void;
}

const useModalContainer = ({
	visible,
	closeOnlyOnTheButton,
	onClose,
}: useModalContainerProps) => {
	const modalRef = useRef(null);
	const backgroundRef = useRef(null);
	const [isOpenModal, setOpenModal] = useState(visible);

	const handleCloseModal = useCallback(() => {
		onClose && onClose();
		setOpenModal(false);
	}, [onClose]);

	!closeOnlyOnTheButton &&
		// eslint-disable-next-line react-hooks/rules-of-hooks
		useClickOutside({
			ref: modalRef,
			backgroundRef,
			onClose: handleCloseModal,
		});

	useEffect(() => {
		setOpenModal(visible);
	}, [visible, handleCloseModal]);

	return {
		isOpenModal,
		modalRef,
		backgroundRef,
		handleCloseModal,
	};
};

export default useModalContainer;
