import SignLayOut from "../../layouts/sign";
import classes from "./index.module.scss";
const SignIn: React.FC = () => {
  return (
    <SignLayOut>
      {/* 登录页的布局 */}
      <div className={classes["root"]}>
        <div className={classes["sign-in-header"]}>
          <p className={classes["sign-in-title"]}>Code Login</p>
          <p className={classes["sign-in-subtitle"]}>
            Welcome back Please enter your details .
          </p>
        </div>
        <div className={classes["sign-in-content"]}>
          <div className={classes["form-item"]}>
            <input type="text" placeholder="mobile" />
          </div>
          <div className={classes["form-item"]}>
            {/* <input type="text" placeholder="password" /> */}
            {/* 这里验证码用多个输入框 */}
          </div>
          <div className={classes["form-item"]}>
            <p>
              <span>Forgot Password?</span>
            </p>
          </div>
          <div className={classes["form-item"]}>
            <button>Login</button>
          </div>
          <p className={classes["sign-up"]}>
            <span>
              Don't have an account? <a href="#!">Sign up</a>
            </span>
          </p>
        </div>
      </div>
    </SignLayOut>
  );
};
export default SignIn;
