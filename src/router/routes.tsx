import { lazy } from "react";
import { RouteProps } from "react-router-dom";

const SignIn = lazy(() => import("../pages/signIn"));
const CodeSignIn = lazy(() => import("../pages/codeSignIn"));
const ForgetPwd = lazy(() => import("../pages/forgetPwd"));

export const normalRoutes: RouteProps[] = [
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/codeSignIn",
    element: <CodeSignIn />,
  },
  {
    path: "/forgetPwd",
    element: <ForgetPwd />,
  },
];
