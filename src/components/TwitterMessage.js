import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      maxChars: props.maxChars,
      charLeft: props.maxChars
    };
  }

  handleClick = (e) => {
    var msg: e.target.value 
    this.setState({
      value: msg,
      charLeft: this.state.maxChars - msg.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.vale} onChange={this.handleClick} />
        <p> Remaining characters: {this.state.charLeft} </p>
      </div>
    );
  }
}

export default TwitterMessage;
