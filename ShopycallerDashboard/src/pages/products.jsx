import React, { useState, useEffect } from 'react';
import product1Image from '../pictures/products/product1.png';
import product2Image from '../pictures/products/product2.png';
import product3Image from '../pictures/products/product3.png';
import canon from '../pictures/products/canon.jpg' ;
import dyson from '../pictures/products/dyson.jpg' ;
import echo from '../pictures/products/echo.jpg' ;
import fitbit from '../pictures/products/fitbit.jpg' ;
import iphone from '../pictures/products/iphone.png' ;
import nike from '../pictures/products/nike.jpg' ;
import ps5 from '../pictures/products/ps5.jpg' ;
import samsungs21 from '../pictures/products/samsungs21.jpg' ;
import nswitch from '../pictures/products/switch.jpg' ;
import axios from 'axios'

const Products = () => {
  const [products, setProducts] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [formProduct, setFormProduct] = useState({
    id: '',
    productName: '',
    price: '',
    description: '',
    productImage: '',
    availability: false,
    quantity: ''
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4040/products/product');
        setProducts(response.data);
      } catch (error) {
        console.error(error);
        // Optional: Handle the error
      }
    };
  
    fetchProducts();
  }, []);
  

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4040/products/product/${id}`,
      );
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleAdd = async () => {
    setShowForm(true);
    try {
      const response = await axios.post("http://localhost:4040/products/addProduct", {
        productName: formProduct.productName,
        price: parseFloat(formProduct.price),
        description: formProduct.description,
        availability: formProduct.availability,
        quantity: formProduct.quantity,
        productImage: formProduct.productImage
      });
      console.log(response.data); // Optional: Handle the response data
    } catch (error) {
      console.error(error);
      // Optional: Handle the error
    
    }
    // Add new product
    //setProducts((prevProducts) => [...prevProducts, { ...formProduct, id: Date.now() }]);

  }

  const handleModify = (id) => {
    setShowForm(true);
    const product = products.find((product) => product.id === id);
    setFormProduct(product);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormProduct((prevProduct) => ({
      ...prevProduct,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

 const handleFormOpen = () => {
  setShowForm(true);
 }

  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formProduct.id) {
      // Modify existing product
      // setProducts((prevProducts) =>
      //   prevProducts.map((product) =>
      //     product.id === formProduct.id ? formProduct : product
      //   )
      // );
      try {
        const response = await axios.put(`http://localhost:4040/products/product/${formProduct.id}`, {
          productName: formProduct.productName,
          price: parseFloat(formProduct.price),
          description: formProduct.description,
          availability: formProduct.availability,
          quantity: formProduct.quantity,
          productImage: formProduct.productImage
        });
        console.log(response.data); // Optional: Handle the response data
      } catch (error) {
        console.error(error);
        // Optional: Handle the error
      }
    } 
      // Add new product
      //setProducts((prevProducts) => [...prevProducts, { ...formProduct, id: Date.now() }]);
    
    setShowForm(false);
    window.location.href = "/products"
  };

  return (
    <div className="product-page">
      {showForm ? (
        <form onSubmit={handleSubmit} className="my-2 p-2">
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              name="productName"
              placeholder="Product Name"
              value={formProduct.productName}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formProduct.price}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={formProduct.description}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={formProduct.image}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2"
            />
            <label>
              <input
                type="checkbox"
                name="availability"
                checked={formProduct.availability}
                onChange={handleChange}
                className="mr-2"
              />
              Available
            </label>
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={formProduct.quantity}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2"
            />
            <div className="flex space-x-4">
              { formProduct.id ? 
              
            
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
                {formProduct.id ? 'Modify Product' : 'Add Product'}
              </button> :
               <button
               onClick={handleAdd}
               className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
                {formProduct.id ? 'Modify Product' : 'Add Product'} 
              </button>
              }
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div>
          <div className="flex flex-row space-x-10 bg-gray-200 my-2 p-2">
            <div className="w-[100px]">
              <p className="font-bold">Image du Produit</p>
            </div>
            <div className="w-[160px]">
              <p className="font-bold">Nom du produit</p>
            </div>
            <div className="w-[65px]">
              <p className="font-bold">Prix</p>
            </div>
            <div className="w-[290px]">
              <p className="font-bold">Description</p>
            </div>
            <div className="w-[100px]">
              <p className="font-bold">Disponibilité</p>
            </div>
            <div className="w-[50px]">
              <p className="font-bold">Quantité</p>
            </div>
            <div className="w-[100px]">
              <p className="font-bold">Action</p>
            </div>
          </div>
          {products.map((product) => (
            <div key={product.id} className="flex flex-row space-x-10 bg-gray-100 my-2 p-2">
              <div className="w-[100px]">
                <img src={product.productImage} alt={product.productName} className="w-[100px]" />
              </div>
              <div className="w-[160px] flex items-center">
                <p className="text-center">{product.productName}</p>
              </div>
              <div className="w-[65px] flex items-center">
                <p className="text-center">${product.price}</p>
              </div>
              <div className="w-[290px] flex items-center">
                <p className="text-center">{product.description}</p>
              </div>
              <div className="w-[100px] flex items-center">
                <p className="text-center">
                  {product.availability ? 'In Stock' : 'Out of Stock'}
                </p>
              </div>
              <div className="w-[50px] flex items-center">
                <p className="text-center">{product.quantity}</p>
              </div>
              <div className="w-[100px] flex items-center">
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Supprimer
                </button>
                <button
                  onClick={() => handleModify(product.id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Modifier
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={handleFormOpen}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Ajouter un Product
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
