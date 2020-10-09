import React from 'react';
import { Helmet } from 'react-helmet';
import { I18nextProvider } from 'react-i18next';
import { Switch, Route } from 'react-router-dom';
import i18n from '../locales';
import routes from '../../configs/routes';

import './styles.scss';

const App = ({ match }) => {
	console.log(match);
	const RouteMap = Object.values(routes).map((item, i) => <Route key={i} exact={item.exact} path={`${match.url}${item.path}`.replace('//','/')} component={item.component} />);

	return (
		<I18nextProvider i18n={i18n}>
			<Helmet
				defaultTitle="React.js Boilerplate1"
			>
				<meta name="description" content="A React.js Boilerplate application" />
			</Helmet>
			<Switch>
				{ RouteMap }
			</Switch>
		</I18nextProvider>
	);
};

export default App;
