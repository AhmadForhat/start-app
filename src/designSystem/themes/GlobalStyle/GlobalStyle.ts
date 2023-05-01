// globalStyles.js
import { createGlobalStyle } from 'styled-components';
import { tokens } from 'designSystem/themes/tokens';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1,h2,h3,h4 {
		width: 100%;
		font-family: ${tokens.fontFamily.default};
		font-weight: ${tokens.fontWeight.semiBold};
		font-style: normal;
		font-size: ${tokens.fontSize.large};
		line-height: 35px;
		text-align: left;
		color: ${tokens.color.gray.default};
  }

  p, a {
    font-family: ${tokens.fontFamily.default};
		font-weight: ${tokens.fontWeight.regular};
		font-style: normal;
		font-size: ${tokens.fontSize.medium};
		text-decoration: none;
		line-height: 22px;
		color: ${tokens.color.gray.default};
  }

	a {
		color: ${tokens.color.primary.light};
		transition: all 0.3s ease-in-out;
		cursor: pointer;

		&:hover {
			font-weight: ${tokens.fontWeight.semiBold};
			color: ${tokens.color.primary.default};
			transform: scale(1.01);
		}
	}
`;
