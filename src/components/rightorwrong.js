import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

import '../styles/right-or-wrong.css'

export class RightOrWrong extends React.Component {

    render() {

      if (this.props.validation && this.props.validation !== null) {
        return (
          <div className="right-or-wrong">
            <img src="https://media.giphy.com/media/l378blSjkootPNzTq/giphy.gif" />
          </div>
        );
      }

      if (!this.props.validation && this.props.validation !== null) {
        return (
          <div className="right-or-wrong">
            <img src="https://media.giphy.com/media/26n6xXh5UiF0BZx7y/giphy.gif" />
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
