import React from 'react';
import {connect} from 'react-redux';

import '../styles/aggretsuko.css'

const lvl1 = "https://i.giphy.com/media/t6Kf2qs5fgWiAlOig5/giphy.webp";
const lvl2 = "https://i.giphy.com/media/2opk4C7c1fHPy/giphy.webp";
const lvl3 = "https://media.giphy.com/media/2y0bDtmlrJtg4/giphy.gif";

export class Aggretsuko extends React.Component {

  renderGIF(value) {
    if (value >= 0 && value < 4) {
      return lvl1;
    } else if (value >= 4 && value < 7) {
      return lvl2;
    } else {
      return lvl3;
    }   
  }

  render() {

    return (
      <div className="aggretsuko">
        <p className="current-score">Streak: {this.props.streak}</p>
        <img className="aggretsuko-gif" src={this.renderGIF(this.props.streak)} alt={`Score ${this.props.streak}.`} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  streak: state.question.streak
})

export default connect(mapStateToProps)(Aggretsuko);
