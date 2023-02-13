import React, { Component } from "react";

export default class NewComponent extends Component {
  constructor() {
    super();
    this.state = {
      status: true,
      number: 100,
    };
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <button onClick={() => this.setState({ status: false })}>
          Click New
        </button>
      </div>
    );
  }
}
