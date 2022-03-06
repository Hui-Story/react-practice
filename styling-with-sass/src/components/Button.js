import React from "react";
/*
  -- classnames 라이브러리 활용 --
  $ yarn add classnames
*/
import classNames from "classnames";
import "./Button.scss";

function Button({ children, size, color, outline, fullWidth, ...rest }) {
  return (
    // 객체로 classNames 에 추가하는 경우 태그에 포함 여부에 따라 스타일 결정
    <button
      className={classNames("Button", size, color, { outline, fullWidth })}
      // 어떤 props 를 받을 지 확실치는 않지만 전달을 받아야 하는 상황
      {...rest}
    >
      {children}
    </button>
  );
  // return <button className={["Button", size].join(" ")}>{children}</button>;
  // return <button className={`Button ${size}`}>{children}</button>;
}

Button.defaultProps = {
  size: "medium",
  color: "blue",
};

export default Button;
