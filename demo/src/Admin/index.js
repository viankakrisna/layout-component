import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import { Layout } from '../../../src/Layout';
import { theme } from '../../../src';
import { ThemeProvider } from 'styled-components';

const Admin = props => (
	<ThemeProvider theme={theme}>
		<Layout>
			<Header />
			<Sidebar />
			<Main />
		</Layout>
	</ThemeProvider>
);

export default Admin;
