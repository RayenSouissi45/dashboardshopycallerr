import BestSellingProducts from "../components/bestSellingProducts";
import GetMoreCustomers from "../components/getMoreCustomers";
import GlobalView from "../components/globalView";
import MostLoyalCustomers from "../components/mostLoyalCustomers";
import Orders from "../components/orders";
import OrderGlobalView from "../components/ordersGlobalView";
import RejectedCalls from "../components/rejectedCalls";
import { useState, useEffect } from "react";

function Dashboard() {
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
      <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link href="./dist/output.css" rel="stylesheet" />
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <div className="flex flex-row bg-gray-100 overflow-y-hidden ">
        
        {/* <Sidebar /> */}
        <div className="flex flex-col w-full pt-112 h-screen overflow-y-scroll">
          {/* <Navbar/> */}
          <div className=" mt-[40px]">
            <b>
              <h1 className="text-3xl pl-8 pt-8 pb-4">Dashboard</h1>
            </b>
          </div>
          <div className={` ${windowWidth <= 375 ? "flex-col" : windowWidth <= 1024 ?  "flex-row" : "flex-row ml-4"} flex flex-row  `}>
            <div className={` ${windowWidth <= 375 ? "" : "ml-8"} flex flex-col  `}>
              <GlobalView/>
              <OrderGlobalView/>
              <Orders/>
              <GetMoreCustomers/>
            </div>
            {/* Third container*/}
            <div className={` ${windowWidth > 1024 ? "ml-10" : "" } flex flex-col justify-center items-center  h-auto `}>
              <BestSellingProducts/>
              <MostLoyalCustomers/>
              <RejectedCalls/>
            </div>
          </div>
        </div>
      </div>
    </>
    )}
  export default Dashboard ;