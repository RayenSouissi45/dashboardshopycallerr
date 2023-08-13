import React from 'react';

import { View } from '@/ui/core';

import ProductCard from '../product-cards';

const ProductCardsContainer = ({ items, deleteOption, placeOrder, listOrders, pass,setListOrders }: any) => {
 
  return (
    <View>
      {items.map((product: any, index: number) => (
        <ProductCard
          deleteOption={deleteOption}
          key={index}
          product={product}
          placeOrder={placeOrder}
          listOrders={listOrders}
          pass={pass}
          setListOrders={setListOrders}
        />
      ))}
    </View>
  );
};

export default ProductCardsContainer;
