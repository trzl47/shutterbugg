// Libs
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import App from './app/App.js';
import ScrollToTop from './app/ScrollToTop.js';

const DEVMODE = process.env.NODE_ENV == 'development' ? true : false;
// const HOST = DEVMODE ? 'localhost' : process.env.VHOST;
// const PRTCL = DEVMODE ? 'http' : 'https';

render(
		<BrowserRouter>
			<ScrollToTop>
				<App />
			</ScrollToTop>
		</BrowserRouter>
,	document.getElementById('app')
);
// registerServiceWorker();;