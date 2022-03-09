import React, { useState } from "react";

function Counter() {
  // const [count, setCount] = useState<number>(0);
  // Generics 를 생략해도 알아서 타입을 유추함
  const [count, setCount] = useState(0);

  // --- 다음과 같은 경우에는 Generics 활용 (확실하지 않을 때) ---
  /*
  type Information = { name: string; description: string };
  const [info, setInformation] = useState<Information | null>(null);
  */

  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
