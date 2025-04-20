import { underConstruction } from "../assets";

const Dashboard = () => {
  return (
    <div className="page">
      <div className="title">Dashboard</div>
      <div className="desc">Under Construction</div>
      <div className="image">
        <img src={underConstruction} alt="" />
      </div>
    </div>
  );
};

export default Dashboard;
