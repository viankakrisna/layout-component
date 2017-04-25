import { render } from 'react-dom';
import React from 'react';
import { asyncComponent, BrowserRouter as Router, Route } from '../../src';

const BasicExample = () => (
	<Router>
		<div>
			<Route
				path="/facebook"
				component={asyncComponent(() => import('./Facebook'))}
			/>
			<Route
				path="/admin"
				component={asyncComponent(() => import('./Admin'))}
			/>
		</div>
	</Router>
);
render(<BasicExample />, document.querySelector('#demo'));
