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
        <button className="skip-button" onClick={() => this.onSkip()}>Skip</button>
        <button className="next-button" onClick={() => this.onNext()} disabled={!this.props.correct}>Next</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  correct: state.question.correct
})

export default connect(mapStateToProps)(CardButtons);