// Libs
import React from 'react';
// styles
import '../../css/footer.css';

// Routes
const Footer = () => {
	return (
		<section className='footer'>
			<article className="company">
				<h3>Company</h3>
				<ul>
					<li><a href="/">Careers</a></li>
					<li><a href="/">Terms</a></li>
					<li><a href="/">Help</a></li>
				</ul>
			</article>
			<article className="products">
				<h3>Products</h3>
				<ul>
					<li>Shutterbugg</li>
					<li><a href="/">Speakerboxx</a></li>
				</ul>
			</article>
			<article className="news">
				<h3>News</h3>
				<ul>
					<li><a href="/">Blog</a></li>
					<li><a href="/">Twitter</a></li>
					<li><a href="/">YouTube</a></li>
					<li><a href="/">Google+</a></li>
					<li><a href="/">Facebook</a></li>
				</ul>
			</article>
		</section>
	);
};

export default Footer;