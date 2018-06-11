import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {login} from '../actions/auth';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {BeatLoader} from 'react-spinners';

class LoginForm extends Component {

	onSubmit(values) {
		this.props.dispatch(login(values.username, values.password));
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
			<div>
				<form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
					<label htmlFor='username' aria-label='username'></label>
					<Field className='username' component='input' type='text' name='username' placeholder='username'/>

					<label htmlFor='password' aria-label='password'></label>
					<Field className='password' component='input' type='password' name='password' placeholder='password'/>

					<button type='submit' disabled={this.props.pristine || this.props.submitting}>enter</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
	loading: state.auth.loading === true
});

const myForm = reduxForm({
	form: 'login'
})(LoginForm);

export default connect(mapStateToProps)(myForm);