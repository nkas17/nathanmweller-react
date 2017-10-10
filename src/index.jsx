import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Main from './Main';

import './styles/font-awesome.min.css';
import './styles/styles.css';

ReactDOM.render(
	<AppContainer>
		<Main />
	</AppContainer>,
	document.getElementById('app'),
);

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./Main', () => {
		const NextApp = require('./Main').default; // eslint-disable-line global-require
		ReactDOM.render(
			<AppContainer>
				<NextApp />
			</AppContainer>,
			document.getElementById('app'),
		);
	});
}
