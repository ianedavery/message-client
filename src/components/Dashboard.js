import React, {Component} from 'react';
import RequiresLogin from './RequiresLogin';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {retrieveMessages} from '../actions/messages';
import {clearAuthToken} from '../local-storage';

class Dashboard extends Component {

	componentWillMount() {
		this.props.dispatch(retrieveMessages());
	}

	logOut() {
		this.props.dispatch(clearAuth());
		clearAuthToken();
	}

	render() {
		console.log(this.props.messages);
		return (
			<div>
				Hello
				<button type='button' onClick={() => this.logOut()}>Logout</button>
			</div>
		)
	}
}

const mapStateToProps = state => ({
    messages: state.messages
});

export default RequiresLogin()(connect(mapStateToProps)(Dashboard));