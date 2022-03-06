import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
// Sass 에서 사용할 경우 확장자만 .module.scss 로 바꿔주면 됨 (node-sass 설치 필요)
import styles from "./CheckBox.module.css";
import classNames from "classnames/bind";

// classNames 라이브러리의 bind 기능
const cx = classNames.bind(styles);

function CheckBox({ children, checked, ...rest }) {
  return (
    // ---- bind 로 대체 가능 ----
    // <div className={styles.checkbox}>
    <div className={cx("checkbox")}>
      <label>
        <input type="checkbox" checked={checked} {...rest} />
        <div className={cx("icon")}>
          {checked ? (
            <MdCheckBox className={cx("checked")} />
          ) : (
            <MdCheckBoxOutlineBlank />
          )}
        </div>
      </label>
      <span>{children}</span>
    </div>
  );
}

export default CheckBox;
