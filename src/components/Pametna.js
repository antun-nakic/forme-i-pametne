import React, { Component } from "react";

export default class Pametna extends Component {
  state = { brojac: 0 };

  handleClick = () => {
    this.setState({
      brojac: 0,
    });
  };

  render() {
    const { naslov } = this.props;
    return (
      <div>
        <h2>{naslov}</h2>
        <h5 onClick={() => this.setState({ brojac: this.state.brojac + 1 })}>
          Brojač: {this.state.brojac}
        </h5>
        {this.state.brojac ? (
          <button type='button' onClick={this.handleClick}>
            Resetiraj
          </button>
        ) : (
          ""
        )}
      </div>
    );
  }
}
