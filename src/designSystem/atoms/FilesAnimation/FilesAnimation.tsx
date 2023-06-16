import React from 'react';
import Lottie from 'react-lottie';
import animationData from './animatedIcon/loading-files.json';

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: animationData,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
};

export const FilesAnimation = () => {
	return <Lottie options={defaultOptions} height={62} width={100} />;
};
