import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import '../styles/login.css';

import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div className="home">

            <h2 className="login-form-header">Sign Up</h2>

            <div className="login-form-container">
                <RegistrationForm />
            </div>

            <div className="spacer">
            </div>

            <Link to="/login">
                <button>Log In</button>
            </Link>

            <Link to="/">
                Back
            </Link>

        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
