import "./topbar.css";
import Button from "../../sub-components/button/Button";

import { useState, useEffect } from "react";
import Profile from "../../sub-components/profile/Profile";

export default function Topbar() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 900);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="topbar">
      {!isSmallScreen ? (
        <>
          <div className="topbarLeft">
            <Button name="Home" color="red" />
            <Button name="About" color="orange" />
            <Button name="Projects" color="green" />
          </div>
          <div className="topbarRight">
          <Profile />
            <Button name="Resume" color="red" />
            <Button name="Hire Me" color="green" />
          </div>
        </>
      ) : (
        <div className="hamburger">
          <Profile />
          <div className="hamMenu">
            <img src="assets/more.png" alt="" />
          </div>
        </div>
        // Or you can omit this div if there's no content to render
      )}
    </div>
  );
}
