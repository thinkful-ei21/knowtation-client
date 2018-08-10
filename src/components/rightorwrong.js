import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

import '../styles/right-or-wrong.css'

export class RightOrWrong extends React.Component {

    render() {

      if (this.props.validation === true && this.props.validation !== null) {
        return (
          <div className="right-or-wrong">
            <img className="correct-gif" src="https://media.giphy.com/media/l378blSjkootPNzTq/giphy.gif" alt="correct gif"/>
          </div>
        );
      }

      if (this.props.validation === false && this.props.validation !== null) {
        return (
          <div className="right-or-wrong">
            <img className="incorrect-gif" src="https://media.giphy.com/media/26n6xXh5UiF0BZx7y/giphy.gif" alt="incorrect gif"/>
          </div>
        );
      } else {
        return null;
      }
        
    }
}

const mapStateToProps = state => ({
  validation: state.question.validation
})

export default connect(mapStateToProps)(RightOrWrong);
