import { useEffect, useState } from "react";

function SidebarCart ({children, text}) {
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

  
  console.log('rayen hi ',windowWidth);
  

  return (
    // <div className=" lg:w-60 max-[375px]:w-screen max-[1024px]:w-[94px] "> 

      <div className="lg:w-52 max-[1024px]:w-[48px] max-[375px]:w-60 bg-white rounded-md  ">
  <a
    href="#"
    className="block px-4 py-2 text-gray-900 font-bold  rounded-md mb-4 hover:bg-gray-400"
  >
    {children}
   {/* <span className=" max-[1024px]:hidden max-[375px]:visible">{text} </span>  */}
   {/* <span className=" xl:block max-w-none max-w-md xl:max-w-none xl:max-w-md xl:hidden lg:block max-[375px]:block">{text}</span> */}

   {/* <span className={(windowWidth >= 375 && windowWidth <= 1024) ? 'hidden' : 'visible' }>{text}</span> */}
   {(windowWidth <= 375 && windowWidth >= 1024) &&   <span>{text}</span>
} 
{((windowWidth < 375) || (windowWidth > 1024)) &&   <span>{text}</span>
} 


  </a>
</div>
  )
}
export default SidebarCart ;