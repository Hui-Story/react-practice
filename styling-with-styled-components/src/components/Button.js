import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      ${(props) =>
        props.outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
    `;
  }}
`;

const sizes = {
  large: {
    height: "3rem",
    fontSize: "1.25rem",
  },
  medium: {
    height: "2.25rem",
    fontSize: "1rem",
  },
  small: {
    height: "1.75rem",
    fontSize: "0.875rem",
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

// --- 위와 같이 sizes, sizeStyles 로 리팩토링 가능 ----
// const sizeStyles = css`
//   ${(props) =>
//     props.size === "large" &&
//     css`
//       height: 3rem;
//       font-size: 1.25rem;
//     `}

//   ${(props) =>
//     props.size === "medium" &&
//     css`
//       height: 2.25rem;
//       font-size: 1rem;
//     `}

//     ${(props) =>
//     props.size === "small" &&
//     css`
//       height: 1.75rem;
//       font-size: 0.875rem;
//     `}
// `;

const fullWidthStyle = css`
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      &:not(:first-child) {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  ${sizeStyles}

  /* 색상 */
  ${colorStyles}

  /* 형제 요소 중 제일 첫 요소가 아닌 경우 (두 번째 요소부터) */
  &:not(:first-child) {
    margin-left: 1rem;
  }

  ${fullWidthStyle}
`;

function Button({ children, color, size, outline, fullWidth, ...rest }) {
  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: "blue",
  size: "medium",
};

export default Button;
