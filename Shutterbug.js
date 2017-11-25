//Libs
import React, { Component } from 'react';
// Components
// styles
import css from './shutterbug.css';

class Shutterbug extends Component {
	render() {
		return(
			<div className={[css.shutterbug].join(' ')}>
				<div className={[css.main].join(' ')}>
					<div className={['container'].join(' ')}>
						<h1>Introducing Shutterbugg</h1>
						<p>Capture the moments that matter.</p>
						<a className={[css.download].join(' ')} href="/">Download Shutterbug</a>
					</div>
				</div>
				<div className={[css.section].join(' ')}>
					<div className={['container'].join(' ')}>
						<div className={['row'].join(' ')}>
							<div className={['col-md-6'].join(' ')}>
								<img alt=''  src={require('./assets/share.png')} />
							</div>
							<div className={['col-md-6'].join(' ')}>
								<h1>Share</h1>
								<p>Share your moments with the people who matter to you most. With Shutterbugg, it's easy to share with the right people.</p>
							</div>
						</div>
					</div>
				</div>
				<div className={[css.section,'container'].join(' ')}>
					<div className={['row'].join(' ')}>
						<div className={['col-md-6'].join(' ')}>
							<h1>Explore</h1>
							<p>Explore moments from your friends and family. Shutterbugg makes it easy to see what's happening in the world and take in everything around you.</p>
						</div>
						<div className={['col-md-6'].join(' ')} style={{textAlign: 'right'}}>
							<img alt=''  src={require('./assets/explore.png')} />
						</div>
					</div>
				</div>
				<div className={[css.section,'container'].join(' ')}>
					<div className={['row'].join(' ')}>
						<div className={['col-md-6'].join(' ')}>
							<img alt=''  src={require('./assets/save.png')} />
						</div>
						<div className={['col-md-6'].join(' ')}>
							<h1>Save</h1>
							<p>Save every photo you take. Shutterbugg automatically saves your photos so you can show them off from anywhere.</p>
						</div>
					</div>
				</div>
				<div className={[css.store,css.section,'container'].join(' ')}>
					<h2>Available for iPhone, iPad, and Android.</h2>
					<a href="/"><img alt=''  src={require('./assets/app-store.png')} width="185px" /></a>
					<a href="/"><img  alt="Get it on Google Play" src={require('./assets/google-play.png')} width="159px" /></a>
				</div>
				<div className={[css.footer].join(' ')}>
					<div className={['container'].join(' ')}>
						<div className={['row'].join(' ')}>
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
	}
}

export default Shutterbug;
