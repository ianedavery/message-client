import React, {Component} from 'react';
import {TweenMax} from "gsap/TweenMax";
import {Link} from 'react-router-dom';

class LoginAndRegister extends Component {

  	componentWillLeave (callback) {
    	const el = this.container;
	    TweenMax.fromTo([el], 1, {x: 0, y: 0}, {x: -1000, y: 0, onComplete: callback});
  	}

	render() {
		return (

			<div className='login_and_register_container' ref={c => this.container = c}>
				<div className='login_button_container'>
					<button className='login_link login_button' onClick={e => {this.props.goToLogin(); this.props.toggleBox(e)}}>
						Login
					</button>
				</div>
				<div className='register_button'>
					<button className='register_link register_button' onClick={e => {this.props.goToRegister(); this.props.toggleBox(e)}}>
						Register
					</button>
				</div>
			</div>

		)
	}
}

export default LoginAndRegister;