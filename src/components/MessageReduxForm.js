import React, {Component} from 'react';
import {Field, reduxForm, reset} from 'redux-form';
import {addMessage} from '../actions/newMessage';

class MessageReduxForm extends Component {

	onSubmit(text) {
		this.props.dispatch(addMessage(text));
		this.props.dispatch(reset('text'));
		this.props.handleNewMessage();
	}

	render() {

		return (
			<form className='message_form' onSubmit={this.props.handleSubmit(text => this.onSubmit(text))}>

				<label htmlFor='text' aria-label='message'></label>
				<div className='textarea_container'>
					<Field className='textarea' component='textarea' type='text' rows='3' cols='25' name='text' />
				<button className='comment_button' type='submit' disabled={this.props.pristine || this.props.submitting}>Comment</button>
				</div>
			
			</form>
		);
	
	}
}

export default reduxForm({
	form: 'text'
})(MessageReduxForm);