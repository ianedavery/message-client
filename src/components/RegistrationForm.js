import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import {Redirect} from 'react-router-dom';

class RegistrationForm extends Component {

	onSubmit(values) {
		const {username, password} = values;
		const user = {username, password};
		return this.props
			.dispatch(registerUser(user))
			.then(() => this.props.dispatch(login(username, password)));
	}

	render() {

		if(this.props.loggedIn) {
			return <Redirect to='/dashboard' />;
		}

		return (
			<form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
				<label htmlFor='username'>username</label>
				<Field component='input' type='text' name='username' />

				<label htmlFor='password'>password</label>
				<Field component='input' type='password' name='password' />

				<button type='submit' disabled={this.props.pristine || this.props.submitting}>register</button>
			</form>
		)
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

const myForm = reduxForm({
	form: 'register'
})(RegistrationForm);

export default connect(mapStateToProps)(myForm);