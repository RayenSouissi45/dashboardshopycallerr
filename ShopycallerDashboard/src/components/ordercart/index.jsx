import ShopOrderIcon from "../icons/shopOrderIcon";
import { useEffect, useState } from "react";

function OrderCart({orderNumber,userText, color= "bg-red-200", time}) {
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
    return (
        <div className={` ${windowWidth <= 1024 && windowWidth > 375 ? "w-[290px]" : "w-[315px]"} flex flex-row  w-[315px]   `}>
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border mt-4 border-gray-300">
                      {/* shop icon */}
                      <ShopOrderIcon/>
                    </div>
                    <div className={` ${windowWidth <= 1024 && windowWidth > 375 ? "" : "ml-4"} mt-4 `}>
                      <div className="text-xl font-bold text-gray-800 text">
                        Commande n∼{orderNumber}
                      </div>
                      <div className="flex flex-row">
                        <div className={`w-auto px-2 h-8 mt-2  rounded-md flex ${color}`}>
                        {/* {` ${}`} */}
                          <b>
                            <p className="">{userText}</p>
                          </b>
                        </div>
                        <div className={` ${windowWidth <= 1024 && windowWidth > 375 ? "" : "ml-1"} w-auto h-7  rounded-lg border mt-2.5 flex flex-row px-2 `}>
                          <img
                            className="h-6 mt-0.5  mb-1 rounded-full"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                          />
                          <b>
                            <p className={` ${windowWidth <= 1024 && windowWidth > 375 ? "" : "ml-2"} text-gray-400  `}>{time}</p>
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>

    )
}
export default OrderCart ;