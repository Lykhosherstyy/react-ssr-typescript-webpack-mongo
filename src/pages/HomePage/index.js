import React from 'react';
import Title from '../../components/Title';
import {Helmet} from "react-helmet";

const HomePage = ({ match }) => {
	console.log(match);
	return (
		<>
			<Helmet>
				<title>My Title</title>
			</Helmet>
			<Title />
		</>
	);
};

export default HomePage;
