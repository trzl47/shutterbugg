// Libs
import React from 'react';
// styles
import '../../css/supporting.css';

// Routes
const Main = () => {
	return (
		<React.Fragment>
			<section className='row'>
				<section className='left'>
					<img alt=''  src={require('../../img/share.png')} />
				</section>
				<section className='right'>
					<h1>Share</h1>
					<p>Share your moments with the people who matter to you most. With Shutterbugg, it's easy to share with the right people.</p>
				</section>
			</section>
			<section className='row'>
				<section className='left'>
					<h1>Explore</h1>
					<p>Explore moments from your friends and family. Shutterbugg makes it easy to see what's happening in the world and take in everything around you.</p>
				</section>
				<section className='right'>
					<img alt=''  src={require('../../img/explore.png')} />
				</section>
			</section>
			<section className='row'>
				<section className='left'>
					<img alt=''  src={require('../../img/save.png')} />
				</section>
				<section className='right'>
					<h1>Save</h1>
					<p>Save every photo you take. Shutterbugg automatically saves your photos so you can show them off from anywhere.</p>
				</section>
			</section>
		</React.Fragment>
	);
};

export default Main;