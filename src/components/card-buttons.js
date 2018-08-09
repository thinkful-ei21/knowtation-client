import React from 'react';
import {connect} from 'react-redux';

import {fetchQuestion, sendAnswer} from '../actions/questions';

import '../styles/card-buttons.css';

export class CardButtons extends React.Component {

  onSkip() {
    this.props.dispatch(sendAnswer('wrong answer', this.props.question.id));
    this.props.dispatch(fetchQuestion());
  }

  render() {
    return (
      <div className="card-buttons">
        <button className="skip-button" onClick={() => this.onSkip()}>Skip</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  question: state.question.question,
  response: state.question.response
})

export default connect(mapStateToProps)(CardButtons);