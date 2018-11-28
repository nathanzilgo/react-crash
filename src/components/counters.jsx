import React, { Component } from "react";
import Counter from "./counterComponent.jsx";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 2 },
      { id: 3, value: 1 },
      { id: 4, value: 0 }
    ]
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value} selected={true}>
            <h4>Product #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}
export default Counters;
