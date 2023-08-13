import React from 'react';

import { ScrollView } from '@/ui/core';

import CategoryProduct from '../category-product';

const CategoryProductsContainer = ({ items }: any) => {
  return (
    <ScrollView horizontal>
      {items.map((CategoryProductItem: any, index: number) => (
        <CategoryProduct
          key={index}
          CategoryProductItem={CategoryProductItem}
        />
      ))}
    </ScrollView>
  );
};

export default CategoryProductsContainer;
