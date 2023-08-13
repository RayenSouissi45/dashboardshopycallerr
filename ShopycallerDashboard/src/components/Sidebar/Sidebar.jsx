import { Link } from 'react-router-dom';
import OrderIcon from "../icons/OrderIcon";
import ShopicallerSiderbarIcon from "../icons/ShopiCallerSidebarIcon";
import StatisticIcon from "../icons/StatisticIcon";
import ClientIcon from "../icons/clientIcon";
import HomeIcon from "../icons/homeIcon";
import ProductIcon from "../icons/productIcon";
import ProfileIcon from "../icons/profileIcon";
import ScIcon from "../icons/scIcon";
import XIcon from "../icons/xIcon";
import SidebarCart from "./SidebarCart";
import LightDark from "./lightDark";
import { useEffect, useState } from "react";

function Sidebar({ onClick }) {
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

  const handleClick = () => {
    onClick(false);
  };

  return (
    <div className="px-4 py-8 h-screen lg:w-60 max-[375px]:w-screen max-[1024px]:w-[94px]">
      <div className="pb-20 pt-3 pl-4 items-center justify-center">
        {windowWidth > 1024 ? (
          <div>
            <ShopicallerSiderbarIcon />
          </div>
        ) : windowWidth > 375 ? (
          <div className='ml-[-20px]'>
            <ScIcon />
          </div>
        ) : (
          <div className="flex flex-row space-x-44 items-center">
            <div>
              <button onClick={handleClick}>
                <XIcon />
              </button>
            </div>
            <div>
              <ScIcon />
            </div>
          </div>
        )}
      </div>

      <div className={`${windowWidth < 375 ? 'mt-[-50px] ml-[30px]' : ''}`}>

      <Link to="/">
        <SidebarCart>
            <HomeIcon />
            <span>Accueil</span>
        </SidebarCart>
        </Link>


        <Link to="/products">
        <SidebarCart>
            <ProductIcon />
            <span>Produits</span>
        </SidebarCart>
        </Link>

        <Link to="/clients">
        <SidebarCart>
            <ClientIcon />
            <span>Clients</span>
        </SidebarCart>
        </Link>

        <Link to="/orders" >
        <SidebarCart>
            <OrderIcon />
            <span>Commande</span>
        </SidebarCart>
        </Link>

        <Link to="/statistics">
        <SidebarCart>
            <StatisticIcon />
            <span>Statistiques</span>
        </SidebarCart>
        </Link>

        <Link to="/commercial">
        <SidebarCart>
            <ProfileIcon />
            <span>Commercial</span>
        </SidebarCart>
        </Link>
      </div>

      <div className="absolute bottom-[-50px]">
        <LightDark />
      </div>
    </div>
  );
}

export default Sidebar;
