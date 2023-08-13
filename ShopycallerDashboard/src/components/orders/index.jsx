import SimpleButton from "../button/simpleButton";
import ArrowRightIcon from "../icons/arrowRightIcon";
import OrderCart from "../ordercart";
import { useState, useEffect } from "react";

function Orders () {
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
        <div className={` ${windowWidth <= 375 ? "w-[343px]" : windowWidth <= 1024 ? "w-[560px]" : "w-[672px]"}  rounded-lg  pb-8 mt-6 mb-6   bg-white`}>
                <div className={` ${windowWidth <= 375 ? "space-x-16" : windowWidth <= 1024 ? "space-x-64" : "space-x-80"} flex flex-row items-center py-8 px-2 bg-white h-28 mx-2  `}>
                  <div className="flex flex-row">
                    <div className="col4 w-4 h-8 rounded-md" />
                    <b>
                      <h5 className="text-lg tracking-wider ">
                        Commandes
                      </h5>
                    </b>
                  </div>
                  {/* <button className="bg-white hover:bg-gray-50 text-gray-500 font-bold  px-4 flex flex-row border rounded-xl ml-80 w-48 ">
                    <p className="pl-4">Voir tous</p>
                    <div className="pb-2 pl-2 ml-2">
                    <ArrowRightIcon/>
                    </div>
                  </button> */}
                  <div className="">
                  <SimpleButton text="Voir tous" width="w-[120px]">
                    <ArrowRightIcon/>
                  </SimpleButton>
                  </div>
                </div>
                <div className={` ${windowWidth <= 375 ? "flex-col" : windowWidth <= 1024 ? " flex-row space-x-1" : "flex-row space-x-2"}  flex  `}>
  <div className={` ${windowWidth <= 1024 && windowWidth > 375 ? "" : "ml-4"} flex flex-col  `}>
    <div className="bg-white w-auto h-32 rounded-2xl flex items-center  ">
      <OrderCart orderNumber="12567" userText="URIAGE" color="bg-purple-300" time="1h 2m" />
    </div>
    <div className="bg-white w-auto h-32 rounded-2xl flex items-center  ">
      <OrderCart orderNumber="12412" userText="LA ROC POSAY" color="bg-green-200" time="10m"/>
    </div>
    <div className="bg-white w-auto  h-32 rounded-2xl flex items-center ">
      <OrderCart orderNumber="8312" userText="Vichy" color="bg-green-500" time="15mins"/>
    </div>
  </div>
  <div className={` ${windowWidth <= 1024 && windowWidth > 375 ? "" : "ml-4"} flex flex-col`}>
    <div className="bg-white w-auto  h-32 rounded-2xl flex items-center ">
      <OrderCart orderNumber="1241" userText="SVR" color="bg-orange-300" time="25mins"/>
    </div>
    <div className="bg-white w-auto  h-32 rounded-2xl flex items-center ">
      <OrderCart orderNumber="12223" userText="DERMEDIC" color="bg-green-100" time="22mins"/>
    </div>
    <div className="bg-white w-auto  h-32 rounded-2xl flex items-center ">
      <OrderCart orderNumber="13233" userText="EZDEEN" color="bg-green-400" time="51mins"/>
    </div>
  </div>
</div>

              </div>

 
        )
}
export default Orders ;