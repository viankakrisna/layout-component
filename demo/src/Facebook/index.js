import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import { Layout } from '../../../src/Layout';
import { theme } from '../../../src';
import { ThemeProvider } from 'styled-components';

const Admin = props => (
	<ThemeProvider
		theme={{
			...theme,
			headerHeight: '43px',
			headerInnerHeight: '24px',
			baseFontSize: '14px',
			sidebarWidth: '184px',
			color: {
				...theme.color,
				headerSearchBar: 'white',
				headerSearchBarText: 'black',
				primary: '#3b5998',
			},
			border: {
				panel: '1px solid',
			},
			borderColor: {
				panel: '#e5e6e9 #dfe0e4 #d0d1d5',
			},
		}}
	>
		<Layout contained>
			<Header />
			<Sidebar />
			<Main />
		</Layout>
	</ThemeProvider>
);

export default Admin;
