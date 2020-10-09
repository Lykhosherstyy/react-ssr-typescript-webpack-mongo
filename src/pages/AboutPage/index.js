import React from 'react';
import Title from '../../components/Title';
import {Helmet} from "react-helmet";

const AboutPage = ({ match }) => {
	console.log(match, 'about');
	return (
		<>
			<Helmet>
				<title>About Page</title>
			</Helmet>
			<Title img={false} />
		</>
	);
};

export default AboutPage;
