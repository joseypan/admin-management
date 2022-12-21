import SignLayOut from "../../layouts/sign";

/**
 * @FileDescription:忘记密码页面
 * @Author: 潘旭敏
 * @Date: 2022-12-20
 * @LastEditors: 潘旭敏
 * @LastEditTime:2022-12-20 16:41
 */
import classes from "./index.module.scss";
const index: React.FC = () => {
  return (
    <SignLayOut>
      {/* 忘记密码页的布局 */}
      <div className={classes["root"]}>
        <div className={classes["sign-in-header"]}>
          <p className={classes["sign-in-title"]}>Forgot Your Password?</p>
          <p className={classes["sign-in-subtitle"]}>
            Please confirm your email address below and we will send you a
            verification code.
          </p>
        </div>
        <div className={classes["sign-in-content"]}>
          <div className={classes["form-item"]}>
            <input type="text" placeholder="mobile" />
          </div>
          <div className={classes["form-item"]}>
            <button>Continue</button>
          </div>
          <p className={classes["sign-up"]}>
            <span>
              Already have an account? <a href="#!">Log in</a>
            </span>
          </p>
        </div>
      </div>
    </SignLayOut>
  );
};
export default index;
