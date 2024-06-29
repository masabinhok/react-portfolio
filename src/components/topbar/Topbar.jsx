import "./topbar.css";
import Button from "../../sub-components/button/Button";
import Social from "../../sub-components/socials/Social";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarLeft">
      <Button name="Home" color="red" />
      <Button name="About me" color="orange" />
      <Button name="Projects" color="green" />
      </div>
     
      <div className="topbarRight">
        <img src="../../../src/assets/signature.png" alt="" className="signature" />
        <Button name="Resume" color="red" />
        <Button name="Hire Me" color="green" />
      </div>
    </div>
  );
}
