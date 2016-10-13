import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';


import Login from './components/Login';
import Projects from './components/Projects';

var host = "http://localhost:5000/api/"
const router = (
	<Router history={hashHistory}>
		<Route path="/" component={Login} />
		<Route path="/projects" component={Projects} host={host} />
	</Router>
);

ReactDOM.render(router, document.getElementById('content'));