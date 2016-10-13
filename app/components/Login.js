import React from 'react';
import { Link, hashHistory } from 'react-router';
import Auth from '../module/Auth';

class Login extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
			errorMessage: '',
			errors: {}
		};
	}
	processForm(event) {
		event.preventDefault();
		let self = this;
		let data = { email: this.refs.email.value, password: this.refs.pass.value };
		$.ajax({
			url: 'http://localhost:5000/login',
			method: 'POST',
			data: data,
			timeout: 15000
		})
		.done(function(data)
		{
			console.log(data);
			self.setState({
				errorMessage: '',
				errors: {}
			});
			Auth.authenticateUser(data.token);
			hashHistory.push('/projects');
		})
		.fail(function(data)
		{
			console.log(data);
			self.setState({
				errorMessage: data.responseJSON.message,
				errors: data.responseJSON.errors
			});
		 });
	}
	render()
	{
		return (
			<div className="ui middle aligned center aligned grid login">
				<div className="column">
			    	<h2 className="ui black image header">
				    	<div className="content">
				    		NMS
				    	</div>
				    </h2>
				    <form action="/services" className="ui large form" onSubmit={this.processForm.bind(this)}>
				    	<div className="ui stacked segment">
				    		<div className="field">
				    			<div className="ui left icon input">
				    				<i className="user icon"></i>
				    				<input type="text" name="email" placeholder="E-mail address" ref="email"/>
				    			</div>
				    		</div>
				    		<div className="field">
				    			<div className="ui left icon input">
				    				<i className="lock icon"></i>
				    				<input type="password" name="password" placeholder="Password" ref="pass"/>
				    			</div>
				    		</div>
				    		<input type="submit" value="Acceder" className="ui fluid large teal submit button" />
				    	</div>
				    </form>
				    {this.state.errorMessage && <p className="ui error message">{this.state.errorMessage}</p>}
				</div>
			</div>
		);
	}
}

export default Login;