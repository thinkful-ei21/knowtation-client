import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import '../styles/user-onboarding.css'

export class UserOnboarding extends React.Component {

  render() {



    return (
      <div className="user-onboarding">

        <div className="user-onboarding-copy">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est laborum.
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