import React from 'react';

export default class Card extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        highlight: false,
        counter: 0
      };
      this.onMouseEnter = this.onMouseEnter.bind(this);
    }

    onMouseEnter() {
      this.setState({
        highlight: !this.state.highlight,
        counter: this.state.counter +=1
      });
    }
    render() {
      const classes = `card ${this.state.highlight ? 'highlight' : ''}`;
      return (
        <div className= {classes} onMouseEnter = {this.onMouseEnter}>
          <p>{this.props.cardText}</p>
          <p>{this.state.counter}</p>
        </div>
    );
  }
}
