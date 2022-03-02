import React from 'react';

// 내부 요소를 props 받아서 적용
function Wrapper({ children }) {
  const style = {
    border: '2px solid black',
    padding: '16px',
  };

  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Wrapper;