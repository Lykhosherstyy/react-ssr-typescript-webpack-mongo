import React from "react";
import { render } from "react-dom";
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from "./pages/_app.js";

const history = createBrowserHistory();

render(
	<Router history={history}>
		<Route path="/">
			<Route path="/:locale(ru)?" component={App}/>
		</Route>
	</Router>, document.getElementById('root'));

if (process.env.NODE_ENV === 'development') {
	if (module.hot) {
		module.hot.accept();
	}
}
