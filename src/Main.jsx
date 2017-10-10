import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FedPage from './pages/FedPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';


/**
 * Main component that wraps everything else
 */
class Main extends React.Component { // eslint-disable-line react/prefer-stateless-function
	render() {
		return (
			<BrowserRouter>
				<main>
					<Header />
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/fed" component={FedPage} />
						<Route exact path="/blog" component={BlogPage} />
						<Route exact path="/about" component={AboutPage} />
					</Switch>
				</main>
			</BrowserRouter>
		);
	}
}

export default Main;
