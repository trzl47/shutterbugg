// Libs
import React from 'react';
// styles
import '../../css/store.css';

// Routes
const Store = () => {
	return (
		<section className='store section container'>
			<h2>Available for iPhone, iPad, and Android.</h2>
			<a href="/">
				<img alt=''  src={require('../../img/app-store.png')} width="185px" />
			</a>
			<a href="/">
				<img  alt="Get it on Google Play" src={require('../../img/google-play.png')} width="159px" />
			</a>
		</section>
	);
};

export default Store;