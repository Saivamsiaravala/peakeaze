import { NavLink } from "react-router-dom";
import {
  nav,
  acc,
  bank,
  dashboard,
  reports,
  contacts,
  invoicing,
  queries,
  // help,
  search,
  notifications,
  settings,
  account,
} from "../assets";
// import report2 from "./../assets/report2.png";
const Header = () => {
  return (
    <>
      <nav className="sidebar">
        <img src={nav} alt="" className="nav-img" />
        <NavLink
          to="dashboard"
          className={({ isActive }) => (isActive ? "active link" : "link")}
        >
          <div className="img-div">
            <img src={dashboard} alt="" />
          </div>
          <div className="title-div">
            <div className="title">Dashboard</div>
          </div>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active link" : "link")}
        >
          <div className="img-div">
            <img src={acc} alt="" />
          </div>
          <div className="title">Accounting</div>
        </NavLink>
        <NavLink
          to="banking"
          className={({ isActive }) => (isActive ? "active link" : "link")}
        >
          <div className="img-div">
            <img src={bank} alt="" />
          </div>
          <div className="title">Banking</div>
        </NavLink>
        <NavLink
          to="reports"
          className={({ isActive }) => (isActive ? "active link" : "link")}
        >
          <div className="img-div">
            <img src={reports} alt="" />
          </div>
          <div className="title">Reports</div>
        </NavLink>
        <NavLink
          to="contacts"
          className={({ isActive }) => (isActive ? "active link" : "link")}
        >
          <div className="img-div">
            <img src={contacts} alt="" />
          </div>
          <div className="title">Contacts</div>
        </NavLink>
        <NavLink
          to="invoicing"
          className={({ isActive }) => (isActive ? "active link" : "link")}
        >
          <div className="img-div">
            <img src={invoicing} alt="" />
          </div>
          <div className="title">Invoicing</div>
        </NavLink>
        <NavLink
          to="/queries"
          className={({ isActive }) => (isActive ? "active link" : "link")}
        >
          <div className="img-div">
            <img src={queries} alt="" />
          </div>
          <div className="title">Queries</div>
        </NavLink>
      </nav>
      <nav className="navigation">
        <section className="section-1">
          <div className="review">Review</div>
          <div className="drop-down-div">
            <select name="engine" id="" className="drop-down">
              <option value="">Google</option>
              <option value="">Bing</option>
              <option value="">Yahoo</option>
            </select>
          </div>
          <div className="data">Quickbook's Data</div>
        </section>
        <section className="section-2">
          <div className="search">
            <img src={search} alt="" />
          </div>
          <button className="export">
            <div className="text">Export to excel</div>
          </button>
          <button className="add-document">
            <div className="text">Add document</div>
          </button>

          <button className="connect-div">
            <select className="connect">
              <option value="" className="option">
                {" "}
                Connect
              </option>
            </select>
          </button>

          <button className="notifications">
            <img src={notifications} alt="" />
          </button>
          <button className="settings">
            <img src={settings} alt="" />
          </button>
          <button className="account">
            <img src={account} alt="" />
          </button>
        </section>
      </nav>
    </>
  );
};

export default Header;
