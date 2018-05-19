import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class LandingPage extends Component {
	render() {

		if(this.props.loggedIn) {
			return <Redirect to='/dashboard' />;
		}

		return (
			<div>This is the landing page</div>
		)
	}
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);