import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux";
import { increaseAsync, decreaseAsync } from "../modules/counter";

function CounterContainer() {
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    // 미들웨어를 먼저 호출
    dispatch(increaseAsync());
    // dispatch(increase());
  };
  const onDecrease = () => {
    dispatch(decreaseAsync());
    // dispatch(decrease());
  };

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

export default CounterContainer;
