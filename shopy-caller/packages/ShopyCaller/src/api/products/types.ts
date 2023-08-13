// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';
// import { getitemdata } from './api';

// const MyComponent = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await getitemdata();
//         setProducts(response);
//       } catch (error) {
//         console.error(error);
//         console.log('error 123');
//       }
//     };

//     fetchProducts();
//   }, []);
// //   return (
// //     // <View>
// //     //   {products.map(product => (
// //     //     <Text key={product.id}>{product.name}</Text>
// //     //   ))}
// //     // </View>
// //   // );
// // };
//  const tableData = products.map(product => [product.id, product.name, product.description, product.price]);

//   return tableData;
// return products
// }

// export default MyComponent ;