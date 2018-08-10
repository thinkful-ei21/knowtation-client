import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import HeaderBar from './header-bar';
import LandingPage from './landing-page';
import Dashboard from './dashboard';
import RegistrationPage from './registration-page';
import LoginPage from './login-page';
import Logout from './logout';
import RightOrWrong from './rightorwrong';
import {refreshAuthToken} from '../actions/auth';

import '../styles/app.css'
import Aggretsuko from './aggretsuko';

export class App extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    // showGIF() {

    //     switch(this.props.validaton) {

    //         case true:
    //         return <RightOrWrong />

    //         case false:
    //         return <RightOrWrong />

    //         default:
    //         return null;
    //     }
    //     if (this.props.validation && this.props.validation !== null) {
    //         return (
    //             <RightOrWrong />
    //         )
    //     }
    // }

    render() {

        return (
            <div className="app">

                <RightOrWrong />

                <HeaderBar />
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/test" component={Aggretsuko} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/register" component={RegistrationPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/logout" component={Logout} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null,
    validation: state.question.validation
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));