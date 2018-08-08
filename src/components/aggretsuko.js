import React from 'react';
import {connect} from 'react-redux';

import '../styles/aggretsuko.css'

const meh = "data:image/png;base64,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"
const happy = "https://78.media.tumblr.com/avatar_d5e4c970bcf3_128.pnj"
const excited = "https://pm1.narvii.com/6822/d8d1763a4c1cd36c8618790c2f2e6c33f0d3379bv2_128.jpg"
const goingHam = "data:image/jpeg;base64,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"

export class Aggretsuko extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winStreak: 0
    }
  }

  onCorrectAnswer() {
    this.setState({
      winStreak: this.state.winStreak + 1
    })
  }

  onWrongAnswer() {
    this.setState({
      winStreak: 0
    })
  }

  aggretsuko() {
    let currentScore = this.state.winStreak;
    if (currentScore >= 0 && currentScore < 3) {
      console.log('not bad...')
      return meh
    }
    else if (currentScore >= 3 && currentScore < 6) {
      console.log('pretty good')
      return happy
    }
    else if (currentScore >= 6 && currentScore < 9) {
      console.log('nice!')
      return excited
    }
    else {
      console.log("YOU'RE ON FIRE!")
      return goingHam
    }
  }

  render() {

    return (
      <div className="aggretsuko">
        <button onClick={() => this.onCorrectAnswer()}>Correct Answer</button>
        <button onClick={() => this.onWrongAnswer()}>Wrong Answer</button>
        <p className="current-score">{this.state.winStreak}</p>
        <img src={this.aggretsuko()} alt='w/e'/>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(Aggretsuko);
