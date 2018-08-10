import React from 'react';
import {connect} from 'react-redux';

import '../styles/aggretsuko.css'

export class Aggretsuko extends React.Component {

  render() {

    return (
      <div className="aggretsuko">
        <p className="current-score">Streak: {this.props.streak}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  streak: state.question.streak
})

export default connect(mapStateToProps)(Aggretsuko);
