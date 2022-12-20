import React, { ReactNode } from "react";
import classes from "./index.module.scss";
const SignLayOut: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div className={classes["root"]}>
      {/* 背景图片区域 */}
      <div className={classes["bg-container"]}></div>
      {/* 登录表单区域 */}
      <div className={classes["sign-container"]}>{children}</div>
    </div>
  );
};
export default SignLayOut;
