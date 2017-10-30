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

  handleChange = event => {
    let msg = event.target.value;
    this.setState({
        value: msg,
        charLeft: this.state.maxChars - msg.length
      })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <p>Characters left: {this.state.charLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
