import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 20px 40px;
		font-family: sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		@media screen and (max-width: 800px) {
			padding: 10px 20px;
		}
		::-webkit-scrollbar {
			background-color: #fff;
			width: 16px !important;
		}


	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
	}

	a {
		text-decoration: none;
		color: black;
	}

	* {
		box-sizing: border-box;
		::-webkit-scrollbar {
			background-color: #fff;
			width: 16px !important;
		}
		
		/* background of the scrollbar except button or resizer */
		::-webkit-scrollbar-track {
			background-color: #fff;
		}
		
		/* scrollbar itself */
		::-webkit-scrollbar-thumb {
			background-color: #babac0;
			border-radius: 16px;
			border: 4px solid #fff;
		}
		
		/* set button(top and bottom of the scrollbar) */
		::-webkit-scrollbar-button {
			display:none;
		}
	}
`;
