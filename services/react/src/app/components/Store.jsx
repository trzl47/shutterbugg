// Libs
import React from 'react';
// styles
import '../../css/store.css';

// Routes
const Store = () => {
	return (
		<section className='stores'>
			<h2 className='store-header'>Available for iPhone, iPad, and Android.</h2>
			<article className='store-links'>
				<a href="/" className='app-store'>
					<img alt='iOS App Store link'  src={require('../../img/app-store.png')} width="185px" />
				</a>
				<a href="/" className='play-store'>
					<img  alt="Get it on Google Play" src={require('../../img/google-play.png')} width="159px" />
				</a>
			</article>
		</section>
	);
};

export default Store;