import React from 'react';
import {connect} from 'react-redux';

import '../styles/card.css'


export class Card extends React.Component {

  onSubmit(e) {
    e.preventDefault();
  }

  onChange(val) {
    console.log(val.toLowerCase());
  }

  render() {
    return (
      <div className="card">

        <div className="code-snippet">
<pre>
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
</pre>
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