import ArrowRightIcon from "../../icons/arrowRightIcon"
import DarkIcon from "../../icons/darkIcon"
import DownGrayIcon from "../../icons/downGrayIcon"
import LightIcon from "../../icons/lightIcon"
import QuestionMarkIcon from "../../icons/questionMark"
import { useState, useEffect } from "react"



function LightDark () {
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
      <div className={`${windowWidth < 376 ? 'mt-10 ml-6 ' :  windowWidth < 1024 ?  ' mt-[60px]' : ''}`}
      >
        {
           windowWidth < 375 ? <div className="w-[300px] h-[82px] bg-white-100 rounded-3xl ">
        <div className="  pt-[10px] h-[70px] flex flex-row bg-gray-100 rounded-3xl space-x-20 ">
          <div className="ml-[-40px] flex flex-row space-x-2">
          <div className="flex-row w-[50px] h-[50px] rounded-full  ml-12">
                    <img
                      className="w-[50px] h-[50px] rounded-full"
                      src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
                    />
                  </div>
                  <div className="">
            <p className="font-semibold text-base	">Tran Mau Tri Tam</p>
            <p className="font-medium text-xs	text-gray-800">Visual Designer</p>

          </div>

          </div>
          
          <div className="mt-6">
            <DownGrayIcon/>

          </div>

        </div>
        </div> : ''
          }
        {/* <div className="lg:hidden "> */}
        <div className={`${windowWidth<376 || windowWidth>1024  ? ' hidden' : 'visible' } `}>
    <ArrowRightIcon/>
    </div>
        {/* <div className=" h-40   max-[1024px]:w-[80px] border-t  "> */}
        <div className={`${windowWidth<376 || windowWidth>1024  ? '' : 'w-[80px]' } h-40    border-t  `}>
    
    
    {/* <div className="flex flex-row max-[1024px]:ml-10 max-[1024px]:w-[50px]   "> */}
    <div className={`${windowWidth<376 || windowWidth>1024  ? '' : 'w-[50px] ml-10' } flex flex-row   `}>
      
    {/* <div className="max-[1024px]:ml-[-30px]"> */}
    <div className={`${windowWidth<376 || windowWidth>1024  ? '' : 'ml-[-30px]' } `}>


      <QuestionMarkIcon/>
      </div>
      
      {/* <p className={`${windowWidth<375 ? 'hidden' : 'visible'} text-white`}> Hello guys</p> */}


      <p className={`${windowWidth<376 || windowWidth>1024  ? 'visible' : 'hidden' } mt-4 ml-2 text-xs `} >help getting started</p>
      <button className={`${windowWidth<376 || windowWidth>1024  ? 'visible' : 'hidden' } bg-purple-300 hover:bg-purple-500 w-6 h-6 rounded-md mt-3 ml-8 `}>
        <p>8</p>
      </button>
    </div>
    {/* <div className="lg:w-52 mt-4 lg:bg-gray-200 max-[1024px]:bg-white rounded-3xl h-10 flex   max-[1024px]:flex-col  max-[1024px]:w-[64px]  "> */}
    <div className={`${windowWidth<376 || windowWidth>1024  ? 'bg-gray-200 w-52' : 'bg-white flex-col w-[64px] ' } mt-4  rounded-3xl h-10 flex  `}>

      <button>
        {/* <div className="lg:w-24 max-[1024px]:mr-[20px]  max-[1024px]:w-[50px] bg-white rounded-3xl h-8 ml-1 flex flex-row shadow-xl hover:bg-gray-400  "> */}
        <div className={`${windowWidth<376 || windowWidth>1024  ? 'w-24 ' : 'w-[50px] mr-[20px]' }   bg-white rounded-3xl h-8 ml-1 flex flex-row shadow-xl hover:bg-gray-400 ` }>
        <LightIcon/>
          
          <p className={`${windowWidth<376 || windowWidth>1024  ? 'visible' : 'hidden' } pl-1 pt-0.5 `}>Light</p>
        </div>
      </button>
      
      {/* <div className="  max-[1024px]:hidden lg:w-24 max-[1024px]:w-[60px] lg:bg-gray-200  rounded-3xl h-8 mt-1 ml-1 flex flex-row  "> */}
      <div className={`${windowWidth<376 || windowWidth>1024  ? 'w-24 bg-gray-200' : ' w-[60px]' }  rounded-3xl h-8 mt-1 ml-1 flex flex-row 0 `}>
         {/* <div className="max-[1024px]:hidden mt-1" > */}
         <div className={`${windowWidth<376 || windowWidth>1024  ? 'visible' : ' hidden' }  mt-1 `} > 
        <button >
        <DarkIcon/>
        </button>
        </div>
        
        {/* <p className="pl-1  pt-0.5 max-[1024px]:hidden ">Dark</p> */}
        <p className={`${windowWidth<376 || windowWidth>1024  ? 'visible ' : ' hidden' } pl-1  pt-0.5 `}>Dark</p>
      </div>
    </div>
  </div>
  </div>
    )
}
export default LightDark