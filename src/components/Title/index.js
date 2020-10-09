import React from 'react';
import { useTranslation } from 'react-i18next';
import image from '../../../public/images/buy-new-jpg.jpg';
import './styles.scss';

const Title = ({ img = true }) => {
	const { t } = useTranslation();

	return (
		<>
			<h1 className="main-title">
				{
					t('title')
				}
			</h1>
			{
				img &&
				<img src={image} alt="test img"/>
			}
		</>
	);
};

export default Title;
