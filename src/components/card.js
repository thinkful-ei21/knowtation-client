import React from 'react';
import {connect} from 'react-redux';

import '../styles/card.css'


export class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toggleHint: true
    }
  }

  onSubmit(e) {
    e.preventDefault();
  }

  onChange(val) {
    console.log(val.toLowerCase());
  }

  toggleHint() {
    this.setState({
      toggleHint: !this.state.toggleHint
    })
  }

  render() {

    let question = "Bubble Sort";
    let questionURL = "https://en.wikipedia.org/wiki/Bubble_sort";

    return (
      <div className="card">

        <div className="code-question">
          <p>What is the Big O Notation of:<span> </span>
            <a className="code-question-link" href={questionURL} target="_blank">
              {question}
            </a>
            ?
          </p>
        </div>

        <div className="code-snippet">
<pre> {/* formatting for <pre> tags have to be this way otherwise the extra indents will display in the DOM */}
{
  `const bubbleSort = array => {
    let swaps = 0;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swaps++;
      }
    }
    if (swaps > 0) {
      return bubbleSort(array);
    }
    return array;
  };`
}
</pre> {/* formatting for <pre> tags have to be this way otherwise the extra indents will display in the DOM */}
        </div>

          <div className="code-hint">
            <a href="#" onClick={() => this.toggleHint()} className="code-hint-toggle">
              Hint
            </a>
            <div className={this.state.toggleHint ? "code-hint-hidden" : "code-hint-visible"}>
              Notice how the function iterates recursively for each swap made.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </div>
          </div>
          
          <div className="user-input">
            <form onSubmit={e => this.onSubmit(e)}>
              <input onChange={e => this.onChange(e.target.value)} className="user-input-bar" placeholder="O(n^2)"/>
              <button type="submit">Submit</button>
            </form>
          </div>
        
      </div>
    )
  }

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(Card);