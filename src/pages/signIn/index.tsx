import { useNavigate } from "react-router-dom";
import SignLayOut from "../../layouts/sign";
import classes from "./index.module.scss";
const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const clickToCodeSignIn = () => {
    navigate("/codeSignIn");
  };
  return (
    <SignLayOut>
      {/* 登录页的布局 */}
      <div className={classes["root"]}>
        <div className={classes["sign-in-header"]}>
          <p className={classes["sign-in-title"]}>Login</p>
          <p className={classes["sign-in-subtitle"]}>
            Welcome back Please enter your details .
          </p>
        </div>
        <div className={classes["sign-in-content"]}>
          <div className={classes["form-item"]}>
            <input type="text" placeholder="username" />
          </div>
          <div className={classes["form-item"]}>
            <input type="text" placeholder="password" />
          </div>
          <div className={classes["form-item"]}>
            <p>
              <span>Forgot Password?</span>
            </p>
          </div>
          <div className={classes["form-item"]}>
            <button>Login</button>
            <button onClick={clickToCodeSignIn}>Login By Code</button>
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
