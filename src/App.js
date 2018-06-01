import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {refreshAuthToken} from './actions/auth';

import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

import './App.css';

class App extends Component {

    componentWillReceiveProps(nextProps) {
	    //if loggedIn is true, call startPeriodicRefresh.
	    if (nextProps.loggedIn) {
	        this.startPeriodicRefresh();
	    //if loggedIn returns false, call the stopPeriodicRefresh method.
	    } 
	    else if (!nextProps.loggedIn) {
	        this.stopPeriodicRefresh();
	    }
	}

    //when App.js is unmounted, call the stopPeriodicRefresh method, 
    //which will stop the user's token from being refreshed
    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    //create the this.refreshInterval variable and set it's value
    //to refresh the user's token every hour
    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        //if the startPeriodicRefresh method has not be called, 
        //and this.refreshInterval is undefined, stop and do nothing
        if (!this.refreshInterval) {
            return;
        }
        //if this.refreshInteval has been created,
        //clear the interval causing token refreshes
        clearInterval(this.refreshInterval);
    }

  	render() {
	    return (
            <Router>
    		    <div>
                    <Switch>
        		    	<Route exact path='/' component={LandingPage} history={this.props.history} />
                        <Route path='/login' component={LoginForm} />
                        <Route path='/register' component={RegistrationForm} />
                        <Route path='/dashboard' component={Dashboard} />
                    </Switch>
    		    </div>
	        </Router>
        );
  	}
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(App);
