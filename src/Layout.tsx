import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import QuickBook from "./Components/QuickBook";
import Button from "./Components/Button";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <QuickBook />
      <Button />
    </div>
  );
};

export default Layout;
