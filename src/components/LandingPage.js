import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import {TransitionGroup} from 'react-transition-group'
import Box from './Box';
import LoginAndRegister from './LoginAndRegister';

class LandingPage extends Component {

	state = {
		shouldShowBox: true,
		shouldShowLoginAndRegisterConatiner: true
	};

	toggleBox = () => {
		this.setState({
			shouldShowBox: !this.state.shouldShowBox
		});
	}

	toggleLoginAndRegister = () => {
		this.setState({
			shouldShowLoginAndRegisterConatiner: !this.state.shouldShowLoginAndRegisterConatiner
		});
	}

	render() {

		if(this.props.loggedIn) {
			return <Redirect to='/dashboard' />;
		}

		const myHistory = () => this.props.history.push('/login');

		return (
			
			<div>
				<TransitionGroup>
					{this.state.shouldShowBox && <Box />}
				</TransitionGroup>
				<TransitionGroup>
					{this.state.shouldShowLoginAndRegisterConatiner && <LoginAndRegister goToLogin={() => setTimeout(function(){myHistory();},1000)} toggleLoginAndRegister={e => this.toggleLoginAndRegister(e)} toggleBox={e => this.toggleBox(e)}/>}
				</TransitionGroup>
			</div>
		)
	}
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);