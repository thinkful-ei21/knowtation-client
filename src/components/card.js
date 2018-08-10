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

    setTimeout(() => {
      this.props.dispatch(fetchQuestion())
    }, 1500);

    e.target.reset();
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
      <main className="card" aria-live="polite">
    
        <div className="correct">
          Correct: {this.props.numCorrect}
          <span className="attempts">Attempts: {this.props.numAttempts}</span>
        </div>

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
              <input onChange={e => this.onChange(e.target.value)} className="user-input-bar" placeholder="n^2" required />
              <button type="submit">Submit</button>
            </form>
          </div>

          <CardButtons />
          <Aggretsuko />
      </main>
    )
  }

}

const mapStateToProps = state => ({
  question: state.question.question,
  numCorrect: state.question.numCorrect,
  numAttempts: state.question.numAttempts
})

export default connect(mapStateToProps)(Card);