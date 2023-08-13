import CreateButton from "../button/CreateButton";
import NavbarForm from "../form/navbarForm";
import HamburgerIcon from "../icons/hamburgerIcon";
import MessageIcon from "../icons/messageIcon";
import NotificationIcon from "../icons/notificationIcon";
import { useState, useEffect } from "react";

function Navbar({ onHamburgerMenuClick }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const handleClickHamburgerMenu = () => {
    onHamburgerMenuClick(true);
    console.log("hi rayen its clicked");
  };

  return (
    <div className={` ${windowWidth <=375 ? "space-x-10" : ""} flex flex-row items-center justify-between py-8 px-8 bg-white h-28 mx-1 fixed top-0  z-50 w-screen `}>
      <div className="w-96 mr-2 flex flex-row justify-center space-x-10 	">
        {windowWidth <= 375 ? (
          <div>
            <button onClick={handleClickHamburgerMenu}>
              <HamburgerIcon />
            </button>
          </div>
        ) : null}
        <div>
          <NavbarForm
            placeholderText={"Rechercher un Produit ..."}
            width="w-[360px]"
            filtre={true}
          />
        </div>
      </div>
      <div className="flex items-center space-x-10 mr-[260px] ">
        {windowWidth > 375 ? (
          <div>
            <CreateButton text="+ Create" />
          </div>
        ) : null}
        <div >
          <button>
            <MessageIcon />
          </button>
        </div>
        <div>
          <button>
            <NotificationIcon />
          </button>
        </div>
        {windowWidth > 375 ? (
          <div className="w-12 h-12">
            <button
              type="button"
              className="flex rounded-full focus:ring-4 focus:ring-gray-200"
              aria-expanded="false"
            >
              <img
                className="w-10 h-10 rounded-full"
                src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
              />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Navbar;
