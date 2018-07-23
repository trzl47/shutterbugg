// Libs
import React from 'react';
// Components
import Main from './components/Main.jsx';
import Supporting from './components/Supporting.jsx';
import Store from './components/Store.jsx';
import Footer from './components/Footer.jsx';

// Routes
const HomePage = () => {
	return (
		<section className='shutterbug'>
			<Main />
			<Supporting />
			<Store />
			<Footer />
		</section>
	);
};

export default HomePage;
