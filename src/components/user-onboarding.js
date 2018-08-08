import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import '../styles/user-onboarding.css'

export class UserOnboarding extends React.Component {

  render() {



    return (
      <div className="user-onboarding">

        <div className="user-onboarding-copy">

          <h2>Welcome to KNOW(tation)!</h2>

          <div className="spacer">
          </div>

          <p>
            Do stuff on here to learn stuff that way you'll know stuff!
            Do stuff on here to learn stuff that way you'll know stuff!
            Do stuff on here to learn stuff that way you'll know stuff!
            Do stuff on here to learn stuff that way you'll know stuff!
          </p>

        </div>

        <div className="spacer">
        </div>
        
        <div className="user-onboarding-button">
          <Link to="/login">
            <button >Log In</button>
          </Link>
        </div>

        <div className="user-onboarding-button">
          <Link to="/register">
            <button>Sign Up</button>
          </Link>
        </div>

      </div>
    )
  }

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(UserOnboarding);