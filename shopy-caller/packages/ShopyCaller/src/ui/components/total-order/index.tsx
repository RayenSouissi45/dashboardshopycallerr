import React from 'react';
import { Button } from '@/ui';
import { Text, View } from '@/ui/core';
import { useState, useEffect } from 'react';
import Cart from '@/screens/cart';

const TotalOrder = ({ buttonText, listOrders, addOrder }: any) => {
  
  
  useEffect(() => {
    console.log("listOrders changeddddd:");
  }, [listOrders]);

  return (
    <View className="h-20 bg-green-10 rounded-t-[20] items-center justify-between px-4 flex-row w-full">
      <View>
        <Text className="text-white">Total de la commande</Text>
        <Text className="text-white font-extrabold"> xTND</Text>
      </View>
      <Button
        variant="primary"
        label={buttonText}
        className="rounded-lg"
        onPress={addOrder}
      />
    </View>
  );
};

export default TotalOrder;
