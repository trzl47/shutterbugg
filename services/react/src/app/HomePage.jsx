// Libs
import React from 'react';
// Components

// Routes
const HomePage = () => {
	return (
			<div className='shutterbug'>
				<div className='main'>
					<div className='container'>
						<h1>Introducing Shutterbugg</h1>
						<p>Capture the moments that matter.</p>
						<a className='download' href="/">Download Shutterbug</a>
					</div>
				</div>
				<div className='section'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-6'>
								<img alt=''  src={require('../img/share.png')} />
							</div>
							<div className='col-md-6'>
								<h1>Share</h1>
								<p>Share your moments with the people who matter to you most. With Shutterbugg, it's easy to share with the right people.</p>
							</div>
						</div>
					</div>
				</div>
				<div className='section container'>
					<div className='row'>
						<div className='col-md-6'>
							<h1>Explore</h1>
							<p>Explore moments from your friends and family. Shutterbugg makes it easy to see what's happening in the world and take in everything around you.</p>
						</div>
						<div className='col-md-6' style={{textAlign: 'right'}}>
							<img alt=''  src={require('../img/explore.png')} />
						</div>
					</div>
				</div>
				<div className='section container'>
					<div className='row'>
						<div className='col-md-6'>
							<img alt=''  src={require('../img/save.png')} />
						</div>
						<div className='col-md-6'>
							<h1>Save</h1>
							<p>Save every photo you take. Shutterbugg automatically saves your photos so you can show them off from anywhere.</p>
						</div>
					</div>
				</div>
				<div className='store section container'>
					<h2>Available for iPhone, iPad, and Android.</h2>
					<a href="/"><img alt=''  src={require('../img/app-store.png')} width="185px" /></a>
					<a href="/"><img  alt="Get it on Google Play" src={require('../img/google-play.png')} width="159px" /></a>
				</div>
				<div className='footer'>
					<div className='container'>
						<div className='row'>
							<div className="col-md-3">
								<h3>Company</h3>
								<ul>
									<li><a href="/">Careers</a></li>
									<li><a href="/">Terms</a></li>
									<li><a href="/">Help</a></li>
								</ul>
							</div>
							<div className="col-md-3">
								<h3>Products</h3>
								<ul>
									<li>Shutterbugg</li>
									<li><a href="/">Speakerboxx</a></li>
								</ul>
							</div>
							<div className="col-md-3">
								<h3>News</h3>
								<ul>
									<li><a href="/">Blog</a></li>
									<li><a href="/">Twitter</a></li>
									<li><a href="/">YouTube</a></li>
									<li><a href="/">Google+</a></li>
									<li><a href="/">Facebook</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
	);
};

export default HomePage;
