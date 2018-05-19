import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {login} from '../actions/auth';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class LoginForm extends Component {

	onSubmit(values) {
		this.props.dispatch(login(values.username, values.password));
	}

	render() {

		if(this.props.loggedIn) {
			return <Redirect to='/dashboard' />;
		}

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

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

const myForm = reduxForm({
	form: 'login'
})(LoginForm);

export default connect(mapStateToProps)(myForm);