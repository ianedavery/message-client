import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {addMessage} from '../actions/newMessage';

class MessageReduxForm extends Component {

	onSubmit(text) {
		this.props.dispatch(addMessage(text));
		this.props.handleNewMessage();
	}

	render() {

		return (
			<form onSubmit={this.props.handleSubmit(text => this.onSubmit(text))}>

				<label htmlFor='text' aria-label='message'></label>
				<Field className='textarea' component='textarea' type='text' rows='3' cols='25' name='text' />

				<button type='submit' disabled={this.props.pristine || this.props.submitting}>Comment</button>

			</form>
		);
	
	}
}

export default reduxForm({
	form: 'text'
})(MessageReduxForm);