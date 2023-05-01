import React from 'react';
import {
	Container,
	ContainerImage,
	ContainerContent,
	LogoContainer,
} from './styles';
import humanFormImage from 'designSystem/assets/human-form.png';
import logo from 'designSystem/assets/logo.png';
import { Button } from 'designSystem';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
	const navigate = useNavigate();

	const goToWalkingThrough = () => navigate('walking-through');

	return (
		<Container data-testid="home">
			<ContainerImage>
				<img src={humanFormImage} />
			</ContainerImage>
			<ContainerContent>
				<LogoContainer src={logo} />
				<h2>Certification practice test</h2>
				<p>
					Unlock your potential and elevate your knowledge with our practice
					test. Assess your current level and improve yourself with our
					carefully crafted questions.
				</p>
				<Button fullSize text="Start" onClick={goToWalkingThrough} />
			</ContainerContent>
		</Container>
	);
};
