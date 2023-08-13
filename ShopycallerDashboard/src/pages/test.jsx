import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import { useState, useEffect } from "react";

function Test() {
  const data = [
    { name: "Lundi", pv: 26, uv: 21 },
    { name: "Mardi", pv: 20, uv: 27 },
    { name: "Mercredi", pv: 30, uv: 18 },
    { name: "Jeudi", pv: 18, uv: 29 },
    { name: "vendredi", pv: 26, uv: 16 },
    { name: "Samedi", pv: 15, uv: 23 },
    { name: "Dimanche", pv: 23, uv: 25 }
  ];
  const barColors = {
    Lundi: "#64c99f",
    Mardi: "#fca652",
    Mercredi: "#64c99f",
    Jeudi: "#64c99f",
    vendredi: "#64c99f",
    Samedi: "#fca652",
    Dimanche: "#64c99f",
  };
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
    <div className="h-screen w-screen ">
      <h1>Hello chart </h1>
      <style>{`.recharts-cartesian-axis-line { display: none; }`}</style>
      <div>
      <ResponsiveContainer width={windowWidth > 1024 ? 672 : windowWidth > 375 ? 560 : 343 } height={440} className=" ">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: windowWidth <= 1024 ? 14 : 30, left: 20, bottom: 5 }}
          
        
        >
        {/* <BarChart className={` ${data=data} h-[300px] w-[500px]`}/> */}
          
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" barSize={40} style={{ background: "red" }}>
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
