import React, {Component} from 'react';
import {TweenMax} from "gsap/TweenMax";

class Box extends Component {

	  componentWillLeave (callback) {
	    const el1 = this.container1;
	    const el2 = this.container2;
	    const el3 = this.container3;
	    const el4 = this.container4;
	    const el5 = this.container5;
	    TweenMax.staggerFromTo([el1, el2, el3, el4, el5], 2, {x: 0, y: 0}, {x: 1000, y: 0, onComplete: callback}, 0.1);
	  }

	render() {

		return (

			<div>
				<div className='box1 box' ref={c => this.container1 = c} />
				<div className='box2 box' ref={c => this.container2 = c} />
				<div className='box3 box' ref={c => this.container3 = c} />
				<div className='box4 box' ref={c => this.container4 = c} />
				<div className='box5 box' ref={c => this.container5 = c} />
			</div>

		);
	}
}

export default Box;