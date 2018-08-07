import React from 'react';
import {connect} from 'react-redux';

import {fetchQuestion, sendAnswerRequest} from '../actions/questions';

import '../styles/card.css'

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleHint: true
    }
  }

  // receive server question body and parse - DONE
  // need actions/reducers for fetch question, submit answer, "give up" on question - fetch question DONE
  // when user "gives up", display answer and explanation
  // format user input by trimming and excluding O's and parens
  // validate answer on frontend, compare question.answer to user input - DONE
  // need to decide where the validation is occurring

  componentDidMount() {
    this.props.dispatch(fetchQuestion());
  }

  onSubmit(e) {
    this.validateAnswer(this.props.answer)
    console.log(this.props.answer)
    e.preventDefault(e);
  }

  onChange(val) {
    this.props.dispatch(sendAnswerRequest(val.toLowerCase()));
  }

  validateAnswer(answer) {
    if (answer === this.props.question.answer) {
      console.log('Correct!');
      return true;
    } else {
      console.log('Nah.');
      return false;
    }
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

        <div className="code-question">
          <p>What is the Big O Notation of:<span> </span>         
            {this.props.question.title}?
          </p>
        </div>

        <div className="code-snippet" dangerouslySetInnerHTML={this.markupHTML(this.props.question.question)} />
          <div className="code-hint">
            <a href="#" onClick={() => this.toggleHint()} className="code-hint-toggle">
              Hint
            </a>
            <div className={this.state.toggleHint ? "code-hint-hidden" : "code-hint-visible"}>
              {this.props.question.hint}
            </div>
          </div>
          
          <div className="user-input">
            <form onSubmit={e => this.onSubmit(e)}>
              <input onChange={e => this.onChange(e.target.value)} className="user-input-bar" placeholder={this.props.question.answer} />
              <button type="submit">Submit</button>
            </form>
          </div>
        
      </div>
    )
  }

}

const mapStateToProps = state => ({
  question: state.question.question,
  answer: state.question.answer
})

export default connect(mapStateToProps)(Card);