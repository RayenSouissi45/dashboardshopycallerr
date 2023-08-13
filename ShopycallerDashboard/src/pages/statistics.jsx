import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import axios from "axios";
import { motion } from "framer-motion";

function Statistics() {
  const [productSales, setProductSales] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4040/products/product');
        const products = response.data.map(product => ({
          name: product.productName,
          totalSales: product.totalSales
        }));
        setProductSales(products);
        console.log(products);
      } catch (error) {
        console.error(error);
        // Optional: Handle the error
      }
    };

    fetchProducts();
  }, []);

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

  const data = productSales.sort((a, b) => b.totalSales - a.totalSales);

  const barColors = {
    "iPhone 13": "#002966",
    "Samsung Galaxy S21": "#004699",
    "Sony PS5": "#0067CC",
    "Nike Air Max": "#0080FF",
    "Canon EOS R5": "#3399FF",
    "Fitbit Versa 3": "#66B2FF",
    "Amazon Echo Dot": "#99CCFF",
    "Dyson V11": "#CCE5FF",
    "Nintendo Switch": "#E6F0FF",
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Produits les plus vendus</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip formatter={(value) => `${value} `} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Bar dataKey="totalSales">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={barColors[entry.name]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <motion.div
        className="h-2 w-full bg-gradient-to-r from-blue-500 to-blue-300 mt-6 rounded-lg"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
    </div>
  );
}

export default Statistics;
