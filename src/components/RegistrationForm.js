import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import {Redirect} from 'react-router-dom';
import {BeatLoader} from 'react-spinners';

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

		if(this.props.loading) {
			return 	<div className='beat_loader'>
						<BeatLoader color={'#FFFFFF'} size={45} />
				    </div>;
		}		

		return (
			<form className='register_form' onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
				<label htmlFor='username' aria-label='username'></label>
				<Field className='username' component='input' type='text' name='username' placeholder='username' />

				<label htmlFor='password' aria-label='password'></label>
				<Field className='password' component='input' type='password' name='password' placeholder='password' />

				<button className='register_button' type='submit' disabled={this.props.pristine || this.props.submitting}>join</button>
				<div className='login_error'>{this.props.error}</div>
			</form>
		)
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
	loading: state.auth.loading
});

const myForm = reduxForm({
	form: 'register'
})(RegistrationForm);

export default connect(mapStateToProps)(myForm);