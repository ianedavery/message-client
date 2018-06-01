import React, {Component} from 'react';
import {TweenMax} from "gsap/TweenMax";
import {Link} from 'react-router-dom';

class LoginAndRegister extends Component {

  	componentWillLeave (callback) {
    	const el = this.container;
	    TweenMax.fromTo([el], 2, {x: 0, y: 0}, {x: 0, y: 1000, onComplete: callback});
  	}

	render() {
		return (

			<div className='login_and_register_container' ref={c => this.container = c}>
				<div className='login_button_container'>
					<button className='login_link login_button' onClick={e => {this.props.goToLogin(); this.props.toggleLoginAndRegister(e); this.props.toggleBox(e)}}>
						Login
					</button>
				</div>
				<div className='register_button'>
					<button className='register_link register_button' onClick={e => {this.props.goToRegister(); this.props.toggleLoginAndRegister(e); this.props.toggleBox(e)}}>
						Register
					</button>
					{/*<Link className='register_link' to='/register'>Register</Link>*/}
				</div>
			</div>

		)
	}
}

export default LoginAndRegister;