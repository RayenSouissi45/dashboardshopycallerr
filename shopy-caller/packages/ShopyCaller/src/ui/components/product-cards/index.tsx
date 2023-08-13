import { FontAwesome5 } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { Alert, Animated, PanResponder } from 'react-native';
import { Image, ImageSourcePropType } from 'react-native';

import { Text, TouchableOpacity, View } from '@/ui/core';


const Orders: any[] = [];


const ProductCard = ({ product, deleteOption, placeOrder,listOrders,  setListOrders }: any) => {
 

  // const [imageSource, setImageSource] = React.useState('');


  // if (product.imagePath) {
  //   setImageSource(product.imagePath);
  // } else {
  //   setImageSource('');
  // }
  
//   const [imageSource, setImageSource] = React.useState<ImageSourcePropType | null>(null);
//   setImageSource(product.imagePath)

// console.log("path :" +imageSource);
// ----------------------------------------------------------------------------------

// const imagePath = require('../../../../assets/products/canon.jpg');
// const imageSource: ImageSourcePropType = imagePath;
let imagePath;
switch (product.productName) {
  case 'Samsung Galaxy S21':
    imagePath = require('../../../../assets/products/samsungs21.jpg');
    break;
  case 'iPhone 13':
    imagePath = require('../../../../assets/products/iphone.png');
    break;
  case 'Dyson V11':
    imagePath = require('../../../../assets/products/switch.jpg');
    break;
    case ' Canon EOS R5':
    imagePath = require('../../../../assets/products/canon.jpg');
    break;
    case 'Dyson V11 ':
    imagePath = require('../../../../assets/products/dyson.jpg');
    break;
    case ' Amazon Echo Dot':
    imagePath = require('../../../../assets/products/echo.jpg');
    break;
    case 'Fitbit Versa 3 ':
    imagePath = require('../../../../assets/products/fitbit.jpg');
    break;
    case ' Nike Air Max ':
    imagePath = require('../../../../assets/products/nike.jpg');
    break;
    case ' Sony PS5 ':
    imagePath = require('../../../../assets/products/ps5.jpg');
    break;
    case 'Nintendo Switch':
    imagePath = require('../../../../assets/products/switch.jpg');
    break;
  default:
    // Handle other cases or assign a default image path
    // imagePath = require('../../../../assets/products/canon.jpg');
}
// ------------------------------------------------------------------------------------

// const [imageSource, setImageSource] = React.useState<ImageSourcePropType | null>(null);

// React.useEffect(() => {
//   if (product.imagePath) {
//     const image = require(product.imagePath);
//     setImageSource(image);
//   } else {
//     setImageSource(null);
//   }
// }, [product.imagePath]);
// --------------------------------------------------------------------------------------------
// const [imagePathx, setImagePathx] = React.useState<string | null>(null);

// React.useEffect(() => {
//   setImagePathx(product.imagePath);
// }, []);
// ------------------------------------------------------------------------------------------
// const [imageUri, setImageUri] = useState<string | null>(null);

//   useEffect(() => {
//     const loadImage = async () => {
//       if (product.imagePath) {
//         const response = await fetch(product.imagePath);
//         const blob = await response.blob();
//         const uri = URL.createObjectURL(blob);
//         setImageUri(uri);
//       } else {
//         setImageUri(null);
//       }
//     };

//     loadImage();
//   }, [product.imagePath]);




  
  const position = React.useRef(new Animated.Value(0)).current;
  const [productNumber, setProductNumber] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const opacity = React.useRef(new Animated.Value(1)).current;
const mtestx = 12 ;

function placeOrderx(id: any, productName: any, quantity: any, price: any, orders: any[], listOrders: any) {
  const existingOrder = orders.find((order) => order.id === id);

  if (existingOrder) {
    // Update the quantity of the existing product
    existingOrder.quantity += 1;
  } else {
    // Add a new product to the orders array
    const order = {
      id: id,
      productName: productName,
      quantity: quantity,
      price: price,
    };

    orders.push(order);
  }

  console.log("Orders after update:");
  console.log(orders);
  // listOrders.push(Orders)
  const addlist = ["A", "B", "C", "D" , "E"]
  setListOrders(orders)
console.log("listOrders : ");
console.log(listOrders);
console.log("end of listorders")
}





const moreProduct = (product: any, Orders: any, listOrders : any) => {
  setProductNumber((prevProductNumber) => prevProductNumber + 1);
  console.log("inside function product number: " + (productNumber + 1));
  placeOrderx(product.id, product.productName, productNumber + 1, product.price, Orders, listOrders);
};
 

  const lessProduct = () => {
    if (productNumber > 0) {
      setProductNumber(productNumber - 1);
    }
  };

  const disappear = () => {
    Alert.alert('Confirmation', 'Are you sure you want to delete?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          Animated.timing(position, {
            toValue: -100,
            duration: 300,
            useNativeDriver: false,
          }).start(() => {
            // Hide the animated view
            Animated.timing(opacity, {
              toValue: 0,
              duration: 500,
              useNativeDriver: false,
            }).start(() => setIsVisible(false));
          });
        },
      },
    ]);
  };

  const slideToLeft = () => {
    Animated.timing(position, {
      toValue: -100,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };
  const slideToRight = () => {
    Animated.timing(position, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        // Animated.event([null, { dx: position }])(gesture);
        // console.log(gesture.dx);
        if (gesture.dx < -0) {
          slideToLeft();
        } else if (gesture.dx > 0) {
          slideToRight();
        }
      },
      onPanResponderRelease: (_) => {},
    })
  ).current;

  const animatedStyle = {
    transform: [{ translateX: position }],
    opacity: opacity,
  };
  



const imagePaths=require('../../../../assets/products/canon.jpg')



return (
    <>
      {isVisible && (
        <View className="relative h-32 my-2 justify-center  w-[365] ">
          {deleteOption && (
            <TouchableOpacity
              className="w-12 h-24 bg-danger-100 justify-center items-center top-0 absolute rounded-2xl m-3 right-5"
              onPress={disappear}
            >
              <FontAwesome5 name="trash-alt" size={24} color="#FF4848" />
            </TouchableOpacity>
          )}

          <Animated.View
            className="w-80 h-28  flex-row   "
            style={[animatedStyle]}
            {...panResponder.panHandlers}
          >
            <View className="w-80 h-32 flex-row mr-7 ">
              {/* <View className="w-28 bg-neutral-50 rounded-l-xl" /> */}
              <View className="w-28 bg-white rounded-l-xl">
              <Image
                  source={imagePath}
                  style={{
                    flex: 1,
                    width: '100%',
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                  }}
                />
                {/* source={product.image} */}
              </View>
              <View className="bg-white rounded-r-xl pl-1 ">
                <View className="w-[250]">
                  <Text className="text-neutral-100 font-medium mt-4">
                    {product.productName}
                  </Text>
                  {/* <Text className="opacity-50">{product.description} </Text> */}
                </View>
                <View className="flex-row pt-5 justify-between px-5">
                  <Text>{product.price} TND</Text>
                  <View className="h-8 w-20 bg-neutral-50 flex-row">
                    <TouchableOpacity
                      className="w-6 bg-neutral-50 justify-center items-center "
                      onPress={lessProduct}
                    >
                      <Text className="text-neutral-70">-</Text>
                    </TouchableOpacity>
                    <View className="w-8  rounded-lg  bg-white justify-center items-center">
                      <Text>{productNumber}</Text>
                    </View>
                    <TouchableOpacity
                      className=" w-6 justify-center items-center"
                      onPress={() => moreProduct(product, Orders, listOrders)} 
                    >
                      <Text className="text-neutral-70">+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </Animated.View>
        </View>
      )}
    </>
  );
};

export default ProductCard;
