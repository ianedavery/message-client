import React, {Component} from 'react';
import RequiresLogin from './RequiresLogin';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

class Dashboard extends Component {

	logOut() {
		this.props.dispatch(clearAuth());
		clearAuthToken();
	}

	render() {
		return (
			<div>
				Hello
				<button type='button' onClick={() => this.logOut()}>Logout</button>
			</div>
		)
	}
}

export default RequiresLogin()(Dashboard);