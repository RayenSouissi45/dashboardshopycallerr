import InputFIcon from "../icons/inputFIcon"
import NavbarFormIcon from "../icons/navbarFormIcon"
import { useEffect, useState } from "react";

function NavbarForm({placeholderText, width, filtre, change=true}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
useEffect(() => {
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleWindowResize);

  return () => {
    window.removeEventListener('resize', handleWindowResize);
  };
});
  return (
    <div>
      { windowWidth >= 375 && change ? 
    <form className="relative flex items-center border-2 bg-gray-100 rounded-md border-black space-x-4">
      <div className="ml-2">
      <NavbarFormIcon/>
      </div>
      <input
        type="text"
        className={`  py-2 rounded-md border-none focus:outline-none bg-gray-100 w-60`}
        placeholder={placeholderText} 
      />
      {
        filtre &&
      <div className="pr-4">
        <button>
        <InputFIcon/>
        </button>
        
      </div> }
    </form> :  <NavbarFormIcon/> }
    </div>
  )
}

export default NavbarForm
