import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import {TransitionGroup} from 'react-transition-group'
import Box from './Box';

class LandingPage extends Component {

	state = {
		shouldShowBox: true
	};

	toggleBox = () => {
		this.setState({
			shouldShowBox: !this.state.shouldShowBox
		});
	}

	render() {

		if(this.props.loggedIn) {
			return <Redirect to='/dashboard' />;
		}

		let myHistory = this.props.history;

		return (
			
			<div>
				<TransitionGroup>
					{this.state.shouldShowBox && <Box />}
				</TransitionGroup>
				<div className='login_button_container'>
					<button className='login_link login_button' onClick={e =>
						{
							this.toggleBox();
							setTimeout(function() {myHistory.push('/login');}, 750)}
						}>
						Login
					</button>
				</div>
				<div className='register_button'>
					<Link className='register_link' to='/register'>Register</Link>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);