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

          <section>

            <p>
              The fundamentals of computer science is often hard to grasp but luckily
              you've got KNOW(tation)! Based on a spaced repetition algorithm, you'll 
              be presented with a question on "Big O Notation". 
            </p>

            <p>
              No idea what that is?
              <br />
              <a className="onboarding-link" href="https://en.wikipedia.org/wiki/Big_O_notation" target="_blank">
              {' '}Click here to learn more!
              </a>
            </p>

            <p>
              Using spaced repetition, we're able to figure out which of the questions 
              you're finding difficult and which of them you're absolutely nailing!
            </p>

            <p>
              With that knowledge, we'll tailor the frequency of the questions to suit
              your learning needs! Just {' '}
              <Link to="/login" className="onboarding-link">log in</Link> or {' '}
              <Link to="/register" className="onboarding-link">sign up</Link> and get rolling!
            </p>

          </section>

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