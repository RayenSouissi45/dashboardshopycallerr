import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import { useState, useEffect } from "react";
import ColoredRectangle from "../coloredRectangle";
import SimpleButton from "../button/simpleButton";
import DownIcon from "../icons/DownIcon";

function Test() {
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
  const data = [
    { name: windowWidth > 375 ? "Lundi" : "Lun", pv: 26 },
    { name: windowWidth > 375 ? "Mardi" : "Mar", pv: 20 },
    { name: windowWidth > 375 ? "Mercredi" : "Merc", pv: 30 },
    { name: windowWidth > 375 ? "Jeudi" : "Jeu", pv: 18 },
    { name: windowWidth > 375 ? "Vendredi" : "Vend", pv: 26 },
    { name: windowWidth > 375 ? "Samedi" : "Same", pv: 15 },
    { name: windowWidth > 375 ? "Dimanche" : "Dim", pv: 23 }
  ];
  const barColors = {
    Lundi: "#64c99f",
    Mardi: "#fca652",
    Mercredi: "#64c99f",
    Jeudi: "#64c99f",
    Vendredi: "#64c99f",
    Samedi: "#fca652",
    Dimanche: "#64c99f",
    Lun: "#64c99f",
    Mar: "#fca652",
    Merc: "#64c99f",
    Jeu: "#64c99f",
    Vend: "#64c99f",
    Same: "#fca652",
    Dim: "#64c99f"
  };
  

  return (
    <div className=" bg-white ">
      <div className={`  ${windowWidth <= 375 ? 'space-x-10' : windowWidth <1024 ?  'space-x-32 ' : "space-x-[210px]"} justify-center	 items-center flex flex-row w-full h-20`}>
        <div className="flex flex-row">
          <ColoredRectangle color={"bg-purple-100"}/>
          <h1 className="text-xl font-semibold">{ windowWidth > 375 ? "Vu Global des commandes" :"Commandes"}</h1>
        </div>
        <div>
        <SimpleButton text='Cette semaine' width="w-[150px]">
                <DownIcon/>
              </SimpleButton>
        </div>

        

      </div>
      <style>{`.recharts-cartesian-axis-line { display: none; }`}</style>
      <div className="">
      <ResponsiveContainer width={windowWidth > 1024 ? 672 : windowWidth > 375 ? 560 : 343 } height={440} >
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: windowWidth <= 1024 ? 14 : 30, left: -30, bottom: 5 }}
          
       
        >
        {/* <BarChart className={` ${data=data} h-[300px] w-[500px]`}/> */}
          
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          
          <Bar dataKey="pv" barSize={40} >
          {data.map((entry, index) => (
              <Cell
              key={`cell-${index}`}
              fill={barColors[entry.name]}
            />
            ))}
          </Bar>
          
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Test;
