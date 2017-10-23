import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FedPage from './pages/FedPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';


/**
 * Main component that wraps everything else
 */
class Main extends React.Component { // eslint-disable-line react/prefer-stateless-function
	render() {
		return (
			<BrowserRouter>
				<main>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/fed" component={FedPage} />
					<Route path="/blog" component={BlogPage} />
					<Route exact path="/about" component={AboutPage} />
				</main>
			</BrowserRouter>
		);
	}
}

export default Main;
