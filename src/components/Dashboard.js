import React, {Component} from 'react';
import RequiresLogin from './RequiresLogin';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {retrieveMessages} from '../actions/messages';
import {clearAuthToken} from '../local-storage';
import Messages from './Messages';
import MessageReduxForm from './MessageReduxForm';

class Dashboard extends Component {

	componentWillMount() {
		this.props.dispatch(retrieveMessages());
	}

	handleNewMessage() {
		this.props.dispatch(retrieveMessages());
	}

	logOut() {
		this.props.dispatch(clearAuth());
		clearAuthToken();
	}

	render() {
		return (
			<div>
				<button type='button' onClick={() => this.logOut()}>Logout</button>
				<MessageReduxForm handleNewMessage={() => this.handleNewMessage()}/>
				<Messages messages={this.props.messages} />
			</div>
		)
	}
}

const mapStateToProps = state => ({
    messages: state.messages
});

export default RequiresLogin()(connect(mapStateToProps)(Dashboard));