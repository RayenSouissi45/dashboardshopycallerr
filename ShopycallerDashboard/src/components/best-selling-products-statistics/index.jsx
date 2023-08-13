import React from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar } from 'recharts';

const BestSellingProductsStatistics = ({ products }) => {
  const renderCustomizedLabel = ({ x, y, width, value }) => {
    return (
      <text x={x + width / 2} y={y} fill="#8884d8" textAnchor="middle" dy={-6}>
        {value}
      </text>
    );
  };

  // Sort the products array in descending order based on sales
  products.sort((a, b) => b.sales - a.sales);

  return (
    <div className="top-selling-products bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-bold mb-4">Produits les plus vendus</h2>
      <BarChart width={800} height={400} data={products.slice(0, 10)}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="category" dataKey="name" />
        <YAxis type="number" dataKey="sales" />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#4C51BF" label={renderCustomizedLabel} />
      </BarChart>
    </div>
  );
};

export default BestSellingProductsStatistics;
