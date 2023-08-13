import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customerName: "John Doe",
      orderDate: "2022-10-01",
      totalAmount: 25.99,
      shippingAddress: "123 Main Street, City, Country",
      items: [
        { id: 1, name: "Product 1", quantity: 2, price: 9.99 },
        { id: 2, name: "Product 2", quantity: 1, price: 15.99 },
      ],
    },
    {
      id: 2,
      customerName: "Jane Smith",
      orderDate: "2022-09-15",
      totalAmount: 42.5,
      shippingAddress: "456 Elm Street, City, Country",
      items: [
        { id: 3, name: "Product 3", quantity: 3, price: 7.5 },
        { id: 4, name: "Product 4", quantity: 2, price: 9.99 },
      ],
    },
    {
      id: 3,
      customerName: "Mark Johnson",
      orderDate: "2022-11-05",
      totalAmount: 63.75,
      shippingAddress: "789 Oak Avenue, City, Country",
      items: [
        { id: 5, name: "Product 5", quantity: 1, price: 63.75 },
      ],
    },
    {
      id: 4,
      customerName: "Emily Brown",
      orderDate: "2022-12-20",
      totalAmount: 12.99,
      shippingAddress: "321 Pine Street, City, Country",
      items: [
        { id: 6, name: "Product 6", quantity: 1, price: 12.99 },
      ],
    },
    {
      id: 5,
      customerName: "David Johnson",
      orderDate: "2023-01-10",
      totalAmount: 55.99,
      shippingAddress: "789 Maple Avenue, City, Country",
      items: [
        { id: 7, name: "Product 7", quantity: 2, price: 22.99 },
        { id: 8, name: "Product 8", quantity: 1, price: 11.99 },
        { id: 6, name: "Product 6", quantity: 1, price: 12.99 }
      ],
    },
  ]);
  const [ordersx, setOrdersx] = useState([])
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:4040/order/getorders');
        setOrdersx(response.data);
        console.log("orders");
        
        console.log(ordersx);
        
      } catch (error) {
        console.error(error);
        // Optional: Handle the error
      }
    };

    fetchOrders();
  }, []);
  
  useEffect(() => {
    console.log("after useeffect");
    
    console.log(ordersx);
  }, [ordersx]);

  const toggleProducts = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => {
        if (order.id === orderId) {
          return {
            ...order,
            showProducts: !order.showProducts,
          };
        }
        return order;
      })
    );
  };

  const calculateOrderTotal = (items) => {
    if (!items || items.length === 0) {
      return "0.00";
    }
  
    const total = items.reduce((total, item) => total + item.price * item.quantity, 0);
    return total.toFixed(2);
  };
  
const x = 3 ;
const modifyOrders = () => {
  const modifiedOrders = [];

  ordersx.forEach((order) => {
    const existingOrder = modifiedOrders.find((modifiedOrder) =>
      modifiedOrder.customerName === order.client_name &&
      modifiedOrder.shippingAddress === order.delivery_address &&
      modifiedOrder.orderDate === order.order_date
    );

    if (existingOrder) {
      existingOrder.items.push({
        id: order.id,
        name: order.product_name,
        quantity: order.quantity,
        price: order.price
      });
    } else {
      modifiedOrders.push({
        id: order.id,
        customerName: order.client_name,
        orderDate: order.order_date,
        shippingAddress: order.delivery_address,
        items: [
          {
            id: order.id,
            name: order.product_name,
            quantity: order.quantity,
            price: order.price
          }
        ]
      });
    }
  });

  return modifiedOrders;
};
const modifiedOrders = modifyOrders();
console.log("modified orders: ");

console.log(modifiedOrders);

  return (
    <div className="orders-page">
      <h1 className="text-2xl font-bold mb-4">Liste des commandes</h1>
      <table className="w-full bg-white shadow-md rounded my-6">
        <thead>
          <tr>
            <th className="py-3 px-4 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              ID de Commande
            </th>
            <th className="py-3 px-4 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Nom du Client
            </th>
            <th className="py-3 px-4 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Date de Commande
            </th>
            <th className="py-3 px-4 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Adresse de Livraison
            </th>
            <th className="py-3 px-4 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Articles Commandés
            </th>
            <th className="py-3 px-4 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Montant Total
            </th>
          </tr>
        </thead>
        <tbody>
  {modifiedOrders.map((order) => (
    <tr key={order.id} className="hover:bg-gray-100">
      <td className="py-3 px-4 border-b border-gray-200">{order.id}</td>
      <td className="py-3 px-4 border-b border-gray-200">{order.customerName}</td>
      <td className="py-3 px-4 border-b border-gray-200">{order.orderDate}</td>
      <td className="py-3 px-4 border-b border-gray-200">{order.shippingAddress}</td>
      <td className="py-3 px-4 border-b border-gray-200">
        {order.items.map((item) => (
          <div key={item.id}>
            <span>{item.name}</span>
            <span className="text-gray-500">
              {item.quantity > 1 ? ` x ${item.quantity}` : ''}
            </span>
            <span className="ml-1">{item.price}$</span>
          </div>
        ))}
      </td>
      <td className="py-3 px-4 border-b border-gray-200">
        {calculateOrderTotal(order.items)}$
      </td>
    </tr>
  ))}
</tbody>


      </table>
    </div>
  );
};

export default Orders;