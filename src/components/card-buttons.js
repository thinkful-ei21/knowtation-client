import React from 'react';
import {connect} from 'react-redux';

import {sendAnswer} from '../actions/questions';

import '../styles/card-buttons.css';

export class CardButtons extends React.Component {

  onSkip() {
    this.props.dispatch(sendAnswer(null));
  }

  onNext() {
    console.log(this.props.correct)
  }

  render() {
    return (
      <div className="card-buttons">

        {/* Skip button sends "null" as an answer to backend */}
        <button className="skip-button" onClick={() => this.onSkip()}>Skip</button>

        {/* Next button is disabled by default, this.props.correct is "false" by default */}
        {/* Next button is enabled when server receives an answer and sends back "true" */}
        {/* When "true" is sent back, this.props.correct will update to "true" */}
        <button className="next-button" onClick={() => this.onNext()} disabled={!this.props.correct}>Next</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  correct: state.question.correct
})

export default connect(mapStateToProps)(CardButtons);