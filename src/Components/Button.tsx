import { chat } from "../assets";

const Button = () => {
  return (
    <button className="chat" onClick={() => window.alert("Button clicked")}>
      <img src={chat} alt="" />
    </button>
  );
};

export default Button;
