import HomePage from '../src/pages/HomePage';
import AboutPage from '../src/pages/AboutPage';

export default {
	homePage: {
		path: "/",
		component: HomePage,
		exact: true
	},
	aboutPage: {
		path: "/about",
		component: AboutPage,
		exact: false
	}
};
