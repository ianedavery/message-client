import React, {Component} from 'react';
import RequiresLogin from './RequiresLogin';
import {connect} from 'react-redux';
import {retrieveMessages} from '../actions/messages';
import Messages from './Messages';
import MessageReduxForm from './MessageReduxForm';
import HamburgerMenu from './Menu';

class Dashboard extends Component {

	componentWillMount() {
		this.props.dispatch(retrieveMessages());
	}

	handleNewMessage() {
		this.props.dispatch(retrieveMessages());
	}

	render() {
		return (
			<div>
				<HamburgerMenu />
				<MessageReduxForm handleNewMessage={() => this.handleNewMessage()} />
				<Messages messages={this.props.messages} />
			</div>
		)
	}
}

const mapStateToProps = state => ({
    messages: state.messages
});

export default RequiresLogin()(connect(mapStateToProps)(Dashboard));