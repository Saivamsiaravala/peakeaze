import { NavLink, Outlet } from "react-router-dom";
import { invoice } from "../assets";

const links = [
  { id: 1, option: "All Documents", path: "all-documents" },
  { id: 2, option: "Bills", path: "" },
  { id: 3, option: "Receipts", path: "receipts" },
];

const Accounting = () => {
  return (
    <div className="accounting">
      <button
        onClick={() => window.alert("Button clicked")}
        className="expenses-report"
      >
        Add to Expenses Report
      </button>
      <section>
        <div className="documents">
          <div className="links">
            {links.map((link) => {
              return (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "link active" : "link"
                  }
                  key={link.id}
                >
                  {link.option}{" "}
                </NavLink>
              );
            })}
          </div>
          <div className="outlet">
            <Outlet />
          </div>
        </div>
        <div className="document">
          <img src={invoice} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Accounting;
