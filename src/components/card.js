import React from 'react';
import {connect} from 'react-redux';

import '../styles/card.css'

let testVar = decodeURI('%3Cpre%3Econst%20bubbleSort%20=%20array%20=%3E%20%7B%0A%20%20%20%20let%20swaps%20=%200;%0A%20%20%20%20for%20(let%20i%20=%200;%20i%20%3C%20array.length%20-%201;%20i++)%20%7B%0A%20%20%20%20%20%20if%20(array%5Bi%5D%20%3E%20array%5Bi%20+%201%5D)%20%7B%0A%20%20%20%20%20%20%20%20swap(array,%20i,%20i%20+%201);%0A%20%20%20%20%20%20%20%20swaps++;%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20if%20(swaps%20%3E%200)%20%7B%0A%20%20%20%20%20%20return%20bubbleSort(array);%0A%20%20%20%20%7D%0A%20%20%20%20return%20array;%0A%20%20%7D;%0A%7D%0A%3C/pre%3E')
let testVar2 = decodeURI('');
let testVar3 = decodeURI('');

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

  markupHTML(decodedURI) {
      return {
        __html: decodedURI
      };
  }

  render() {
    console.log(typeof testVar);

    let question = "Bubble Sort";

    return (
      <div className="card">

        <div className="code-question">
          <p>What is the Big O Notation of:<span> </span>         
            {question}?
          </p>
        </div>

        <div className="code-snippet" dangerouslySetInnerHTML={this.markupHTML(testVar)} />

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