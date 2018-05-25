import React, {Component} from 'react';
import Moment from 'moment';

class Messages extends Component {

	render() {

		Moment.locale('en');

		let loading,
			messages;

		if(this.props.messages.loading) {
			loading = <div>Loading...</div>
		}

		if(this.props.messages.messages.length) {
			messages = this.props.messages.messages.map((message, index) => (
				<div key={index} className='message'>
					<div className='poster_info'>
						<img className='avatar' src={'https://api.adorable.io/avatars/50/' + message.author + '@adorable.io.png'} alt='avatar' />
						<p className='metadata'><span>{message.author}</span><br />{Moment(message.date).format('MMM D, h:m a')}</p>
					</div> 
					<p className='message_text'>
						{message.text}
					</p>
				</div> 
			)).reverse();
		}

		return (

			<section className='messages'>
				{loading}
				{messages}
			</section>

		);
	}
}

export default Messages;