import React, { Component } from "react";
import { choice } from "./helpers";
import Coin from "./Coin";

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" }
    ]
  };

  constructor(props) {
    super(props);

    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState(currState => {
      return {
        currCoin: newCoin,
        nFlips: currState.nFlips + 1,
        nHeads: currState.nHeads + (newCoin.side === "heads" ? 1 : 0),
        nTails: currState.nTails + (newCoin.side === "tails" ? 1 : 0)
      };
    });
  }

  handleClick() {
    this.flipCoin();
  }

  render() {
    return (
      <div className="CoinContainer">
        <h2>Let's Flip A Coin!</h2>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button onClick={this.handleClick}>Flip Me!</button>
        <p>
          {`Out of ${this.state.nFlips} flips, there have been ${this.state.nHeads} heads and ${this.state.nTails} tails`}
        </p>
      </div>
    );
  }
}

export default CoinContainer;
