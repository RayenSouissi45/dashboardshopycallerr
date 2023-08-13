import ColoredRectangle from "../coloredRectangle";
import InstagramIcon from "../icons/InstagramIcon";
import FacebookIcon from "../icons/facebookIcon";
import TwitterIcon from "../icons/twitterIcon";
import {useState, useEffect} from 'react'

function GetMoreCustomers () {
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
        <div className={` ${windowWidth <= 375 ? "w-[343px] h-70" : windowWidth <= 1024 ? "w-[560px] h-60" : "w-[672px] h-60"} bg-white rounded-lg   mb-20 `}>
                <div className="flex flex-row pl-6 ml-4 mt-8">
                  <div className="col2 w-4 h-8 rounded-md" />
                  <b className="flex flex-row">
                    <ColoredRectangle color="bg-blue-100"/>
                    <h5 className="text-lg tracking-wider pl-4  ">
                      Get more customers !
                    </h5>
                  </b>
                </div>
                <p className="ml-10 pt-4 mr-4 text-gray-400">
                  50% of new customers explore products because the author sharing
                  the work on the social media
                </p>
                <div className="flex flex-row">
                  <p className="ml-10 text-gray-400">
                    network. Gain your earnings right now !
                  </p>
                  <img
                    className="h-4 mt-1.5"
                    src="https://emojis.wiki/thumbs/emojis/fire.webp"
                  />
                </div>
                <div className="flex flex-row mt-8  space-x-4 ml-4 bg-white">
                  <button className={` ${windowWidth <= 375 ? "px-4" : windowWidth <= 1024 ?  "px-7" : "px-12"} bg-white w-auto hover:bg-gray-100 ml-12 text-gray-800 font-bold  border rounded-xl flex flex-row h-12  py-2`}>
                  <FacebookIcon/>
                  {windowWidth > 375 ?  <h2>Facebook</h2> : null}
                   
                  </button>
                  <button className={` ${windowWidth <= 375 ? "px-4" : windowWidth <= 1024 ?  "px-7" : "px-12"} bg-white w-auto  hover:bg-gray-100 ml-20 text-gray-800 font-bold   border rounded-xl flex flex-row h-12   py-2`}>
                    <TwitterIcon/>
                    {windowWidth > 375 ?  <h2>Twitter</h2> : null}
                  </button>
                  <button className={` ${windowWidth <= 375 ? "px-4" : windowWidth <= 1024 ?  "px-7" : "px-12"} bg-white w-auto  hover:bg-gray-100 ml-20 text-gray-800 font-bold  border rounded-xl flex flex-row h-12   py-2 `}>
                    <InstagramIcon/>
                    {windowWidth > 375 ?  <h2>Instagram</h2> : null}
                  </button>
                </div>
              </div>
    )
}
export default GetMoreCustomers ;