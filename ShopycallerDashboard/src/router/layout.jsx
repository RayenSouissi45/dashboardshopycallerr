import Navbar from "../components/navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { useState, useEffect } from "react";
import SignIn from "../pages/signIn";

function Layout({ children }) {
  const [isClicked, setIsClicked] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleHamburgerMenuClick = () => {
    setIsClicked(true);
    console.log("Hamburger menu clicked");
  };

  const handleButtonClick = (value) => {
    setIsClicked(value);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (children.type === SignIn) {
      console.log("Sign In page");
    } else {
      console.log("Not Sign In page");
    }
  }, [children]);

  const isSignInPage = children.type === SignIn;

  return (
    <div className="flex">
      {!isSignInPage && (
        <div className="max-[375px]:w-screen">
          {windowWidth <= 375 && !isClicked ? null : <Sidebar onClick={handleButtonClick} />}
        </div>
      )}
      <div className="w-full">
        {!isSignInPage && <Navbar onHamburgerMenuClick={handleHamburgerMenuClick} />}
        <div className="mt-28">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
