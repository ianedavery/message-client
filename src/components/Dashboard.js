import React, {Component} from 'react';
import RequiresLogin from './RequiresLogin';

class Dashboard extends Component {
	render() {
		return (
			<div>Hello</div>
		)
	}
}

export default RequiresLogin()(Dashboard);