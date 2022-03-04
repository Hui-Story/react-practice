import React, { Component } from 'react';

class Counter extends Component {
  // 1. 일반적인 방법 (함수의 bind 활용)
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     counter: 0
  //   };
  //   this.handleIncrease = this.handleIncrease.bind(this);
  //   this.handleDecrease = this.handleDecrease.bind(this);
  // }

  // 2. class-properties 문법 활용 (간편한 방법, CRA 프로젝트에 적용 가능)
  state = {
    counter: 0,
    fixed: 1
  };
  handleIncrease = () => {
    // 함수형 업데이트
    this.setState(state => ({
      counter: state.counter + 1
    }));
  };
  handleDecrease = () => {
    this.setState(state => ({
      counter: state.counter - 1
    }));
  };

  // handleIncrease() {
  //   console.log('increase')
  // }

  // handleDecrease() {
  //   console.log('decrease')
  // }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>고정된 값 : {this.state.fixed}</p>
      </div>
    );
  }
}

export default Counter;