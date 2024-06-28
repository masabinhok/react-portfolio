import "./topbar.css";
import Button from "../../sub-components/button/Button";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarLeft">
      <Button name="Home" color="red" />
      <Button name="Projects" color="green" />
      </div>
      <div className="topbarCenter">
        <span className="centerText">FRONTEND</span>
      </div>
      <div className="topbarRight">
        <Button name="Resume" color="red" />
        <Button name="Hire Me" color="green" />
      </div>
    </div>
  );
}
