import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './containers/App';

ReactDOM.render(
	<Provider store={}>
		<App />
	</Provider>, document.getElementById('root'));
