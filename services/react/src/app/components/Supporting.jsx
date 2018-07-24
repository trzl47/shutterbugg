// Libs
import React from 'react';
// styles
import '../../css/supporting.css';

// Routes
const Main = () => {
	return (
		<React.Fragment>
			<section className='panel'>
				<article className='panel-image pull-left'>
					<h1 className='mobile-header'>Share</h1>
					<img alt=''  src={require('../../img/share.png')} />
				</article>
				<article className='panel-content pull-right'>
					<h1 className='desktop-header'>Share</h1>
					<p>
						Share your moments with the people who matter to you most. With Shutterbugg, it's easy to share with the pull-right people.
					</p>
				</article>
			</section>

			<section className='panel'>
				<article className='panel-content pull-left'>
					<h1 className='desktop-header'>Explore</h1>
					<p>
						Explore moments from your friends and family. Shutterbugg makes it easy to see what's happening in the world and take in everything around you.
					</p>
				</article>
				<article className='panel-image pull-right'>
					<h1 className='mobile-header'>Explore</h1>
					<img alt='' src={require('../../img/explore.png')} />
				</article>
			</section>

			<section className='panel'>
				<article className='panel-image pull-left'>
					<h1 className='mobile-header'>Save</h1>
					<img alt='' src={require('../../img/save.png')} />
				</article>
				<article className='panel-content pull-right'>
					<h1 className='desktop-header'>Save</h1>
					<p>
						Save every photo you take. Shutterbugg automatically saves your photos so you can show them off from anywhere.
					</p>
				</article>
			</section>
		</React.Fragment>
	);
};

export default Main;