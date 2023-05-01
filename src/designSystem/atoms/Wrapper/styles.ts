import styled from 'styled-components';
import { tokens } from 'designSystem/themes/tokens';

export const Wrapper = styled.div`
	position: relative;
	padding: ${`${tokens.spacing.medium} ${tokens.spacing.large}`};
	max-width: 1455px;
	margin: 0 auto;

	@media (max-width: 768px) {
		padding: ${`${tokens.spacing.small} ${tokens.spacing.small}`};
	}
`;
