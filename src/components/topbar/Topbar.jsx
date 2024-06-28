import "./topbar.css";
import Button from "../../sub-components/button/Button";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarLeft">
        <span className="topbarLogo">Sabin.</span>
      </div>
      <div className="topbarRight">
        <Button name="Resume" color="red" />
        <Button name="Hire Me" color="green" />
      </div>
    </div>
  );
}
