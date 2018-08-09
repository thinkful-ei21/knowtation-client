import React from 'react';
import {connect} from 'react-redux';

import {fetchQuestion, sendAnswer} from '../actions/questions';

import '../styles/card-buttons.css';

export class CardButtons extends React.Component {

  onSkip() {
    this.props.dispatch(sendAnswer('wrong answer', this.props.question.id));
    this.props.dispatch(fetchQuestion());
    console.log(this.props.response)
  }

  onNext() {
    this.props.dispatch(fetchQuestion());
  }

  render() {
    return (
      <div className="card-buttons">

        {/* Skip button sends "null" as an answer to backend */}
        <button className="skip-button" onClick={() => this.onSkip()}>Skip</button>

        {/* Next button is disabled by default, this.props.correct is "false" by default */}
        {/* Next button is enabled when server receives an answer and sends back "true" */}
        {/* When "true" is sent back, this.props.correct will update to "true" */}
        <button className="next-button" onClick={() => this.onNext()} disabled={!this.props.response}>Next</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  question: state.question.question,
  response: state.question.response
})

export default connect(mapStateToProps)(CardButtons);