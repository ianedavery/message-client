import React, {Component} from 'react';
import {slide as Menu} from 'react-burger-menu';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {connect} from 'react-redux';

class HamburgerMenu extends Component{

	logOut() {
		this.props.dispatch(clearAuth());
		clearAuthToken();
	}

	render(){

		const styles = {
	  		bmBurgerButton: {
			    position: 'absolute',
			    width: '36px',
			    height: '30px',
			    right: '20px',
			    top: '20px'
	  		},
	  		bmBurgerBars: {
	    		background: '#FFFFFF'
	  		},
		  	bmCrossButton: {
			    height: '24px',
			    width: '24px',
			    color: '#FFFFFFF'
		  	},
	  		bmCross: {
	    		background: '#bdc3c7'
	  		},
	  		bmMenu: {
			    background: '#00002f',
			    padding: '2.5em 1.5em 0',
			    fontSize: '1.15em'
	  		},
	  		bmMorphShape: {
	    		fill: '#373a47'
	  		},
	  		bmItemList: {
	    		color: '#b8b7ad',
	    		padding: '0.8em'
	  		},
	  		bmItem: {
	    		display: 'inline-block'
	  		},
	  		bmOverlay: {
	    		background: 'rgba(0, 0, 0, 0.3)'
	  		}
		}

		return(

				<Menu right styles={styles}>
					<button type='button' onClick={() => this.logOut()}>Logout</button>
				</Menu>
		
		)
	}
}

export default connect(null)(HamburgerMenu);