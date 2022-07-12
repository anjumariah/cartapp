import React, { Component } from 'react'
import Parentcount from './parentcount'
import { INCREMENT_PARENT } from '../../redux/counterType'
import { connect } from 'react-redux'
export class childcount extends Component {

    incrementParentCounter = () => {
        this.props.dispatch({INCREMENT_PARENT})
    }

  render() {
    return (
      <div>
        <div>
            This is parent Component - Counter: {this.props.counter}
        </div>
        <button
        onClick={this.incrementParentCounter}
        >
            Incremnet ChildCounter
        </button>
        <Parentcount />
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
    counter:state.Parentcount
})
export default connect(mapStateToProps) (childcount)