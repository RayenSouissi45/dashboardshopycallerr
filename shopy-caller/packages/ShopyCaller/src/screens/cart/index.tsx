import React from 'react';

import { ScrollView, Text, View } from '@/ui';
import CategoryProductsContainer from '@/ui/components/category-product-container';
import FootIcon from '@/ui/components/icons/foot-icon';
import ParChequeIcon from '@/ui/components/icons/par-cheque-icon';
import ProductCardsContainer from '@/ui/components/product-cards-container';
import TotalOrder from '@/ui/components/total-order';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';

//import Product from './product';
const Cart = () => {
  // const route = useRoute();
  // const xtest = (route.params as { x: number })?.x;
  const [address, setAddress] = useState('');

  const handleAddressChange = (text: any) => {
    setAddress(text);
  };
  const products = [
    {
      id: 1,
      name: 'SVR masque ',
      price: 10.99,
      description: ' Purifie, hydrate et illumine la peau',
      image: require('../../../assets/product1.png'),
    },
    {
      id: 2,
      name: 'Masque hydratant à laloe vera',
      price: 19.99,
      description: 'Intensément et apaise la peau.',
      image: require('../../../assets/product2.png'),
    },
    {
      id: 3,
      name: 'Masque éclat à la vitamine C',
      price: 7.99,
      description: ' Ravive léclat naturel de la peau,',
      image: require('../../../assets/product3.png'),
    },
  ];
  const methodofpayment = [
    {
      name: 'En Espèce',
      icon: <FootIcon />,
    },
    {
      name: 'Par chèque',
      icon: <ParChequeIcon />,
    },
  ];

  return (
    <View className="bg-neutral-200 relative flex">
      <ScrollView className=" flex">
        <View className="pt-20  ">
          <Text className="text-white text-left text-xl  pl-8 ">
            Récapitulatif de la commande
          </Text>
          <Text className="text-white opacity-50 text-left text-sm pt-2  pl-8 ">
            Validation de panier
          </Text>
          <View className="border-y border-grey-10 mt-5">
            <View className=" py-5 mt-3 ml-5">
              <Text className="text-white text-lg">Produits </Text>
              <ProductCardsContainer items={products} deleteOption={true} />
            </View>
          </View>
        </View>
        {/* <View className="h-[308] bg-black">
          <View>
            <Text className="text-white text-lg m-5">Adresse</Text>
          </View>
             <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        /> 
        </View> */}
        <View className="h-[158]">
        <Text className="text-white text-lg m-5">Adresse de livraison</Text>
  <View className="bg-white rounded-2xl h-[60]">
   
    <TextInput
      value={address}
      onChangeText={handleAddressChange}
      placeholder="Saisissez votre adresse"
      className="bg-white px-4 py-2 m-5 rounded text-center"
      style={{ textAlign: 'center', textAlignVertical: 'center' }}
      
    />
  </View>
</View>
        <View className="h-[308] ">
          <View>
            <Text className="text-white font-medium m-5">
              Méthode de paiement
            </Text>
          </View>
          <View className="flex-row justify-center mt-3 ml-[88] ">
            {/* <CategoryProduct titleText="En espéce" testx="hello" />
            <CategoryProduct titleText="Par chèque" testx="dagla" /> */}
            <CategoryProductsContainer items={methodofpayment} />
          </View>
        </View>
      </ScrollView>
      <View className="absolute inset-x-0 bottom-0">
        <TotalOrder buttonText="Valider" />
      </View>
    </View>
  );
};

export default Cart;
