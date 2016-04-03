import * as React from 'react';
import App from '../containers/App';
import configureStore from '../store/configureStore';


var Layout = React.createClass({

	render: function render() {
		const store = configureStore(this.props);
		
		return (
			<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<title>React • TodoMVC</title>
				<link rel="stylesheet" href="node_modules/todomvc-common/base.css" />
				<link rel="stylesheet" href="node_modules/todomvc-app-css/index.css" />
			</head>
			<body>
			<section className="todoapp" id="root">
				<App store={store} />
			</section>
			<footer className="info">
				<p>Double-click to edit a todo</p>
				<p>Created by <a href="http://github.com/remojansen/">Remo H. Jansen</a></p>
				<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
			</footer>
			<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.25/system.js"></script>
			<script type="text/javascript" src="node_modules/babel-polyfill/dist/polyfill.js"></script>
			<script type="text/javascript" src="bundle.js"></script>

			<script dangerouslySetInnerHTML={{__html:
				// set our baseURL reference path
				`System.config({
					baseURL: '/',
					map: {
					'lodash': 'node_modules/lodash/lodash.js',
						'page': 'node_modules/page/index.js',
						'path-to-regexp': 'node_modules/page/node_modules/path-to-regexp/index.js',
						'isarray': 'node_modules/page/node_modules/path-to-regexp/node_modules/isarray/index.js',
						'react': 'node_modules/react/dist/react-with-addons.js',
						'react-dom': 'node_modules/react-dom/dist/react-dom.js',
						'redux': 'node_modules/redux/dist/redux.js',
						'react-redux': 'node_modules/react-redux/dist/react-redux.js',
						'classnames': 'node_modules/classnames/index.js'
					}
				});

				System.import('client');`
			}}>
			</script>
			</body>
			</html>
		);
	}
});

module.exports = Layout;