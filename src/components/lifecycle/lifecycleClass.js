import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react'

export default class lifecycleClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0,
        };
        this.increment = () => this.setState({ count: this.state.count + 1});
        this.decrrment = () => this.setState({ count:this.state.count - 1})

    }
    
    componentDidMount(){
        console.log("component has mounted");
    }

    componentDidUpdate(){
        console.log("component updated. count is now" + this.state.count + ".");
    }

  render() {
    console.log("rendering");
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrrment}>-1</button>
      </div>
    )
  }
}
