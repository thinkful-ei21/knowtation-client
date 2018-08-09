import React from 'react';
import {connect} from 'react-redux';
import CardButtons from './card-buttons';
import Aggretsuko from './aggretsuko';

import {fetchQuestion, sendAnswer} from '../actions/questions';

import '../styles/card.css'

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: null,
      toggleHint: true,
      currentScore: 0
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchQuestion());
  }

  onSubmit(e) {
    e.preventDefault(e);
    this.props.dispatch(sendAnswer(this.state.answer));
    this.props.dispatch(fetchQuestion());
    console.log(this.props.response)
  }

  onChange(val) {
    this.setState({
      answer: val.replace(/[O()]/gm, '').toLowerCase()
    })
  }

  toggleHint() {
    this.setState({
      toggleHint: !this.state.toggleHint
    })
  }

  markupHTML(snippet) {
      return {
        __html: decodeURI(snippet)
      };
  }

  render() {

    return (
      <div className="card">

        {/* TEST CODE / REMOVE LATER */}
        <div>
          {this.props.numCorrect}
          {this.props.numAttempts}
        </div>
        {/* TEST CODE / REMOVE LATER */}

        <div className="code-question">
          <p>What is the Big O Notation of:<span> </span>         
            {this.props.question.title}?
          </p>
        </div>

        {/* Code Snippet */}
        <div className="code-snippet" dangerouslySetInnerHTML={this.markupHTML(this.props.question.question)} />

          {/* "Hint" button to display/hide hint */}
          <div className="code-hint">
            <a href="#" onClick={() => this.toggleHint()} className="code-hint-toggle">
              Hint
            </a>
            <div className={this.state.toggleHint ? "code-hint-hidden" : "code-hint-visible"}>
              {this.props.question.hint}
            </div>
          </div>
          
          {/* Input bar with submit action */}
          <div className="user-input">
            <form onSubmit={e => this.onSubmit(e)}>
              <input onChange={e => this.onChange(e.target.value)} className="user-input-bar" placeholder={this.props.question.answer} required />
              <button type="submit">Submit</button>
            </form>
          </div>

          <CardButtons />
          <Aggretsuko />
      </div>
    )
  }

}

const mapStateToProps = state => ({
  question: state.question.question,
  numCorrect: state.question.numCorrect,
  numAttempts: state.question.numAttempts
})

export default connect(mapStateToProps)(Card);