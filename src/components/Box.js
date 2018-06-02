import React, {Component} from 'react';
import {TweenMax} from "gsap/TweenMax";

class Box extends Component {

  	componentWillLeave (callback) {
	    const el1 = this.container1;
	    const el2 = this.container2;
	    const el3 = this.container3;
	    const el4 = this.container4;
	    const el5 = this.container6;
	    const el6 = this.container7;
	    const el7 = this.container8;
	    const el8 = this.container9;
	    TweenMax.staggerFromTo([el1, el2, el3, el4], 2, {x: 0, y: 0}, {x: 1000, y: 0, onComplete: callback}, 0.1);
	    TweenMax.staggerFromTo([el8, el7, el6, el5], 2, {x: 0, y: 0}, {x: 1000, y: 0, onComplete: callback}, 0.1);
  	}

	render() {

		return (

			<div>
				<div>
					<div className='box1 box_top' ref={c => this.container1 = c} />
					<div className='box2 box_top' ref={c => this.container2 = c} />
					<div className='box3 box_top' ref={c => this.container3 = c} />
					<div className='box4 box_top' ref={c => this.container4 = c} />
				</div>
				<div>
					<div className='box5 box_bottom' ref={c => this.container6 = c} />
					<div className='box6 box_bottom' ref={c => this.container7 = c} />
					<div className='box7 box_bottom' ref={c => this.container8 = c} />
					<div className='box8 box_bottom' ref={c => this.container9 = c} />
				</div>
			</div>
		);
	}
}

export default Box;