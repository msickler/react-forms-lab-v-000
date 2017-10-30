import React from 'react';

const amountofWords = line => line.split(' ').filter(l => l).length
const isValidPoem = poem => {
  const poemLines = poem.split('\n').filter(l => l)
  const isRightAmountOfLines = poemLines.length === 3
  if (poem) {
    const hasRightAmountOfWords = amountofWords(poemLines[0]) === 5 && amountofWords(poemLines[1]) === 3 && amountofWords(poemLines[2]) === 5
    return isRightAmountOfLines && hasRightAmountOfWords
  }
  return false
}

class PoemWriter extends React.Component {
  constructor() {
    super()

    this.state = {
      value: '',
      isValid: true
    }
  }

  setPoem = event => {
   const value = event.target.value
   this.setState({
     value,
     isValid: isValidPoem(value),
   });
 }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.setPoem} />
        {!this.state.isValid &&
          <div id="poem-validation-error"style={{color: 'red'}}>
            This poem is not written in the right structure!
          </div>
        }
      </div>
    )
  }
}

export default PoemWriter;
