import { Container } from './styles';
import { Coding } from 'designSystem/icons';

interface DevelopingProps {
	pageName: string;
}

export const Developing = ({ pageName }: DevelopingProps): JSX.Element => {
	return (
		<Container>
			<Coding width="30%" height="30%" />
			<h2>Developing</h2>
			<p>
				<span>We are creating the page </span>
				<b>{pageName}</b>
				<span>. As soon as possible, we will release</span>
			</p>
		</Container>
	);
};
