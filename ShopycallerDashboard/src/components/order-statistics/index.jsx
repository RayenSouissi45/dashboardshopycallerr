import React, { useEffect, useState } from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from 'recharts';

const OrderStatistics = ({ data, selectedUnit }) => {
  const [formattedData, setFormattedData] = useState([]);

  useEffect(() => {
    const formatDataByUnit = () => {
      const currentDate = new Date();
      let formattedData = [];

      switch (selectedUnit) {
        case '7d':
          const past7Days = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 6);
          formattedData = data.filter(entry => new Date(entry.date) >= past7Days);
          break;
        case '1m':
          const past30Days = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 29);
          formattedData = data.filter(entry => new Date(entry.date) >= past30Days);
          break;
        case '6m':
          const past6Months = new Date(currentDate.getFullYear(), currentDate.getMonth() - 5, currentDate.getDate());
          formattedData = data.filter(entry => new Date(entry.date) >= past6Months);
          break;
        case '1y':
          const pastYear = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate());
          formattedData = data.filter(entry => new Date(entry.date) >= pastYear);
          break;
        case '5y':
          const past5Years = new Date(currentDate.getFullYear() - 5, currentDate.getMonth(), currentDate.getDate());
          formattedData = data.filter(entry => new Date(entry.date) >= past5Years);
          break;
        default:
          formattedData = data;
          break;
      }

      return formattedData;
    };

    const formattedData = formatDataByUnit();
    setFormattedData(formattedData);
  }, [data, selectedUnit]);

  return (
    <div className="order-statistics bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-bold mb-4">Suivi des statistiques des commandes</h2>
      <LineChart width={800} height={400} data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="orders" stroke="#4C51BF" strokeWidth={2} />
      </LineChart>
    </div>
  );
};

export default OrderStatistics;
