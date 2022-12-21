/**
 * @FileDescription:路由相关的组件
 * @Author: 潘旭敏
 * @Date: 2022-12-20
 * @LastEditors: 潘旭敏
 * @LastEditTime:2022-12-20 16:46
 */

import { BrowserRouter, Route, RouteProps, Routes } from "react-router-dom";
import { normalRoutes } from "./routes";

const renderNormalRoutes = (routes: RouteProps[]) => {
  return routes.map((ele) => {
    return <Route path={ele.path} element={ele.element}></Route>;
  });
};

const SwitchRoutes: React.FC = () => {
  return (
    <Routes>
      {/* 常规路由 */}
      <Route>{renderNormalRoutes(normalRoutes)}</Route>
    </Routes>
  );
};

const Routers: React.FC = () => {
  return (
    <BrowserRouter>
      <SwitchRoutes />
    </BrowserRouter>
  );
};
export default Routers;
