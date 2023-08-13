import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import { Text, View } from '@/ui';

export const CategoryProduct = ({ CategoryProductItem }: any) => {
  const [isPressedParCheque, setIsPressed] = useState(false);
  const handelPressParCheque = () => {
    setIsPressed(!isPressedParCheque);
  };
  return (
    <TouchableWithoutFeedback
      onPressIn={handelPressParCheque}
      onPressOut={handelPressParCheque}
    >
      <View
        className={`h-[119] w-[89] mx-2 items-center bg-white rounded-xl ${
          isPressedParCheque ? 'bg-espece-50 border-2 border-green-10' : ''
        }`}
      >
        <View
          className={`h-[40] w-[40] bg-neutral-50 mt-5 items-center justify-center rounded-lg mb-[14]  ${
            isPressedParCheque ? 'bg-white' : ''
          }`}
        >
          {/* <FootIcon /> */}
          {CategoryProductItem.icon}
          {/*image of icon that is displayed will depend on the props that are passed to the component */}
        </View>
        <Text
          className={`text-black ${isPressedParCheque ? 'text-white' : ''}`}
        >
          {/* {titleText} */}
          {CategoryProductItem.name}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default CategoryProduct;
