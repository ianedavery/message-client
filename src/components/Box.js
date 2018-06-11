import React, {Component} from 'react';
import {TweenMax} from "gsap/TweenMax";

class Box extends Component {

  	componentWillLeave (callback) {
	    const el1 = this.container1,
	    	  el2 = this.container2,
	    	  el3 = this.container3,
	    	  el4 = this.container4,
	     	  el5 = this.container5,
	    	  el6 = this.container6,
	    	  el7 = this.container7,
	    	  el8 = this.container8,
	    	  el9 = this.container9,
	    	  el10 = this.container10,
	    	  el11 = this.container11,
	    	  el12 = this.container12,
	    	  el13 = this.container13,
	    	  el14 = this.container14;
	    TweenMax.staggerFromTo([el1, el2, el3, el4, el5, el6, el7], 1, {x: 0, y: 0}, {x: 1000, y: 0, onComplete: callback}, 0.1);
	    TweenMax.staggerFromTo([el8, el9, el10, el11, el12, el13, el14], 1, {x: 0, y: 0}, {x: 1000, y: 0, onComplete: callback}, 0.1);
  	}

	render() {

		return (

			<div>
				<div>
					<div className='box1 box_top' ref={c => this.container1 = c} />
					<div className='box2 box_top' ref={c => this.container2 = c} />
					<div className='box3 box_top' ref={c => this.container3 = c} />
					<div className='box4 box_top' ref={c => this.container4 = c} />
					<div className='box5 box_top' ref={c => this.container5 = c} />
					<div className='box6 box_top' ref={c => this.container6 = c} />
					<div className='box7 box_top' ref={c => this.container7 = c} />
				</div>
				<div>
					
					<div className='box8 box_bottom' ref={c => this.container8 = c} />
					<div className='box9 box_bottom' ref={c => this.container9 = c} />
					<div className='box10 box_bottom' ref={c => this.container10 = c} />
					<div className='box11 box_bottom' ref={c => this.container11 = c} />
					<div className='box12 box_bottom' ref={c => this.container12 = c} />
					<div className='box13 box_bottom' ref={c => this.container13 = c} />
					<div className='box14 box_bottom' ref={c => this.container14 = c} />
				</div>
			</div>
		);
	}
}

export default Box;