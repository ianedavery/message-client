import React, {Component} from 'react';

class Messages extends Component {

	render() {

		let loading,
			messages;

		if(this.props.messages.loading) {
			loading = <div>Loading...</div>
		}

		if(this.props.messages.messages.length) {
			messages = this.props.messages.messages.map((message, index) => (
				<p key={index}>
					{message.text} {message.author} {message.date}
				</p> 
			)).reverse();
		}

		return (

			<div>
				{loading}
				{messages}
			</div>

		);
	}
}

export default Messages;