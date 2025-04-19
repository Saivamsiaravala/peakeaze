import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import QuickBook from "./Components/QuickBook";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <QuickBook></QuickBook>
    </div>
  );
};

export default Layout;
