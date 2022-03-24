import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2
    };
  }

  updateCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <>
        <button onClick={this.updateCount}>counter</button>
        <p>{this.state.count}</p>
      </>
    );
  }
}
