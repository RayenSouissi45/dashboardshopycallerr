import SimpleButton from "../button/simpleButton"
import ColoredRectangle from "../coloredRectangle"
import Decrease from "../decrease/decrease"
import GlobalViewCommercialCart from "../globalViewCommercialCart/globalViewCommercialCart"
import DownIcon from "../icons/DownIcon"
import InformationIcon from "../icons/InformationIcon"
import HeartBeatIcon from "../icons/heartBeatIcon"
import RedDownIcon from "../icons/redDownIcon"
import SeeEveryThing from "../icons/seeEveryThing"
import ShopIcon from "../icons/shopIcon"
import UpGreenIcon from "../icons/upGreenIcon"
import Increase from "../increase/increase"
import { useEffect, useState } from "react"
import Try from "../../pictures/Commercial/try"
import picAmina from '../../pictures/Commercial/commercialAmina.png'
import picMarwa from '../../pictures/Commercial/commercialMarwa.png'
import picWafa from '../../pictures/Commercial/commercialWafa.jpg'







function GlobalView () { 

  const CustomersTable = [{name :"Amina Hazem ",  picture: picAmina},
  {name :"Marwa Masmoudi", picture: picMarwa},
  {name :"Wafa Aribi", picture: picWafa}]
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
  return (<div className={` ${windowWidth <= 375 ? 'w-[348px] ' : windowWidth <= 1024 ? "w-[561px]" : 'w-[672px]'} mb-10 h-[504px]  bg-white rounded-lg    h-[500px]`}>
    {/* flex-grow */}
                <div className={` ${windowWidth <= 375 ? 'space-x-6' : windowWidth <1024 ?  'space-x-56 ' : "space-x-[340px]"} flex flex-row items-center  h-28  `}>
                  <div className="flex flex-row ">
                   <ColoredRectangle color="bg-orange-200" />
                <b>
                  <h5 className="text-lg tracking-wider ">
                    Vue Globale
                  </h5>
                </b>
              </div>
              {/* <div className={`${ windowWidth <= 375 ? " " : " ml-80"}`}> */}
              <div className={` ${windowWidth <= 1024 ? " " : ""}  w-auto `} >
              <SimpleButton text='Cette semaine'>
                <DownIcon/>
              </SimpleButton>
              </div>
              
              {/* </div> */}
            </div>
            <div className={` ${windowWidth <= 1024 ? "w-[512px]" : ""} bg-gray-100 ml-4 mr-4 rounded-2xl p-4 h-40 flex flex-row `}>
              <div className={` ${ windowWidth <= 375 ?  "w-[143px]  " : windowWidth < 1024 ? "w-[184px]" : "w-[296px] "} bg-white  h-32 rounded-2xl shadow-lg items-center flex flex-row  `}>
                <div className={` ${windowWidth <= 375 ? "hidden" : ""} w-12 h-12 rounded-full 0 flex items-center justify-center ml-4`}>
                  {/* shop icon */}
                  <ShopIcon/>
                </div>
                <div className={` ${ windowWidth <= 375 ? "ml-8 flex-col" : windowWidth < 1024 ? 'flex-col' : 'flex-row'} flex `}>
                <div className="ml-4  ">
                  <div className="flex flex-row ">
                    <div className="text-sm font-semibold text-gray-800">
                      { windowWidth >= 1024 ? "Nombre de clients" : "Clients"}
                    </div>
                    {/* information icon */}
                    <InformationIcon/>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 font-semibold	leading-[48px]">1024</div>
                </div>
                <div className={` ${windowWidth < 1024 ? "ml-[15px]" : ""}`}>
                <Decrease percentNumber='1.8' />
                </div>
                </div>
                {/* mb-20 ml-6 mr-2 */}
              </div>
              {/* ---------------------------------------------------------------------------- */}
              <div className=" w-84 h-32 rounded-2xl  flex items-center ml-8 ">
                <div className={` ${windowWidth <= 375 ? 'hidden' : ""} w-12 h-12 rounded-full bg-purple-300 flex items-center justify-center ml-4`}>
                  {/* heart beat icon */}
                  <HeartBeatIcon/>
                </div>
                <div className={` ${windowWidth <= 1024 ? "flex-col" : "flex row"} flex ml-4 flex flex-row`}>
                  <div className="">
                  <div className="flex flex-row">
                    <div className="text-sm font-semibold text-gray-800">
                    { windowWidth >= 375 ? "Nombre de commande" : "Revenu"}
                    </div>
                    {/* information icon */}
                    <InformationIcon/>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">256</div>
                  </div>
                  <div>
                  <Increase percentNumber="37.8" />
                  </div>
                </div>
                
              </div>
            </div>
            <div className={` ${windowWidth <= 375 ? "ml-1" : "ml-8"}ml-8 mt-8  flex flex-row`}>
              <div className=" flex flex-row">
              <p className=" w-[240px] flex flex-row ">
                Vous avez &nbsp; <b className=" flex flex-row w-[180px] "> 57 télé-commercial<img
                className="h-3 mt-2"
                src="https://upload.wikimedia.org/wikipedia/commons/8/83/Noto_Emoji_Pie_1f60e.svg"
              /></b>
              </p>
              
              </div>
              <button className={` ${windowWidth > 1024 ? "ml-48"  : windowWidth > 375 ? " ml-24" : "" } h-[48px] bg-white flex justify-center items-center  hover:bg-gray-300 text-gray-500 font-bold  px-4 flex flex-row border rounded-xl `}>
                <h2 className="pl-1 pb-2 pt-1">{ windowWidth < 375 ? "Envoyer" : "Envoyer un message"}</h2>
              </button>
              
            </div>
            {/* ---------------------------------------------------------------------------- */}
            {/* <div className="flex flex-row p-8 mt-6">
              <GlobalViewCommercialCart text="Amina Hazem">
              <img
                    className="w-20 h-20 rounded-full"
                    src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
                  />
              </GlobalViewCommercialCart>
              <GlobalViewCommercialCart text="Wafa Masmoudi">
              <img
                    className="w-20 h-20 rounded-full"
                    src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
                  />
              </GlobalViewCommercialCart>
              <GlobalViewCommercialCart text="Amira Aribi">
              <img
                    className="w-20 h-20 rounded-full"
                    src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
                  />
              </GlobalViewCommercialCart>
              <GlobalViewCommercialCart text="Voir tous">
                <SeeEveryThing/>
              </GlobalViewCommercialCart>
            </div> */}
            <div className={` ${windowWidth > 1024 ?  " space-x-10" : windowWidth > 375 ?  "space-x-5" : ""} mt-5  flex flex-row`}>
  {CustomersTable.map((item , index) => (
    (windowWidth > 375 && index < 3) || (windowWidth <= 375 && index < 2) ? (
      <div key={index}>
        <GlobalViewCommercialCart CategoryProductItem={item} />
      </div>
    ) : null
  ))}
  <div className="flex flex-col  flex justify-center items-center w-[100px] h-[120px]">
    <div className="flex-row w-[64px] h-[64px] rounded-full bg-gray-100 flex justify-center items-center ">
      <SeeEveryThing/>
    </div>
    <p className="pl-12 pt-2 ml-[-45px] font-medium	text-xs">Voir tous</p>
  </div>
</div>

          </div> ) }
          export default GlobalView