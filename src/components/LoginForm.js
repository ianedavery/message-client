import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {login} from '../actions/auth';

class LoginForm extends Component {

	onSubmit(values) {
		this.props.dispatch(login(values.username, values.password));
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
					<label htmlFor='username'>username</label>
					<Field component='input' type='text' name='username' />

					<label htmlFor='password'>password</label>
					<Field component='input' type='password' name='password' />

					<button type='submit' disabled={this.props.pristine || this.props.submitting}>login</button>
				</form>
			</div>
		);
	}
}

export default reduxForm({
	form: 'login'
})(LoginForm);