import { TouchableOpacity } from 'react-native';
import { ScrollView, Text, View } from '@/ui';
import CategoryProductsContainer from '@/ui/components/category-product-container';
import FootIcon from '@/ui/components/icons/foot-icon';
import OrderSearchIcon from '@/ui/components/icons/order-search-icon';
import ParChequeIcon from '@/ui/components/icons/par-cheque-icon';
import ProductCardsContainer from '@/ui/components/product-cards-container';
import TotalOrder from '@/ui/components/total-order';
import SearchInput from '@/ui/core/input/search-input';
import RepairIcon from '@/ui/icons/repair-icon';
import { useEffect, useState } from 'react';
import axios from 'axios'
// import MyComponent from '@/api/products/types';
import { getitemdata } from '../../api/products/api';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native';



const Order = (productName: any) => {
  // const listOrders: any[] = [
  //   {
  //     deliveryAddress: '123 Main Street',
  //     clientName: 'John Doe',
  //     products: [
  //       {
  //         id: 1,
  //         productName: 'Product 1',
  //         quantity: 2,
  //         price: 10.99,
  //       },
  //       {
  //         id: 2,
  //         productName: 'Product 2',
  //         quantity: 3,
  //         price: 15.99,
  //       },
  //       // Add more products as needed
  //     ],
  //   },
  // ];
  // const listOrders: any[] = [
  //   {
  //             id: 1,
  //             productName: 'Product 1',
  //             quantity: 2,
  //             price: 10.99,
  //           },
  //           {
  //             id: 2,
  //             productName: 'Product 2',
  //             quantity: 3,
  //             price: 15.99,
  //           },
  //         ]
  
  const [listOrders, setListOrders] = useState<any[]>([]);
  function changeOrders(A: any) {
    setListOrders(A)
  }
          // console.log("test on order screen");
          
          // console.log(listOrders);
          
  const pass= 5 ;
  
  const orders = [
    {
      id: 1,
      products: [
        {
          id: 1,
          name: 'Product 1',
          quantity: 2,
          price: 10.99,
        },
        {
          id: 2,
          name: 'Product 2',
          quantity: 3,
          price: 15.99,
        },
        // Add more products as needed
      ],
    },
    {
      id: 2,
      products: [
        {
          id: 3,
          name: 'Product 3',
          quantity: 1,
          price: 7.99,
        },
        // Add more products as needed
      ],
    },
    // Add more orders as needed
  ];

    function placeOrder ()  {
      console.log("Order placedx")
      console.log(`Nom: ${productName}`);

    } ;
    
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

  const [productx, setProductx] = useState([]);

  useEffect(() => {
    console.log("only use effect")
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://192.168.1.9:4040/products/product');
        setProductx(response.data);
        
        console.log("worked fine hamdoullah")
      } catch (error) {
        console.log("not worked")
        console.error(error);
        // Optional: Handle the error
      }
    };
  
    fetchProducts();
  }, []);
  // console.log("hello")
  // console.log(productx)
  // const orders: any[] = [];
const x= 10
  const CategoryProductList = [
    {
      name: 'Visage',
      icon: <FootIcon />,
    },
    {
      name: 'Peau',
      icon: <ParChequeIcon />,
    },
    {
      name: 'Massage',
      icon: <RepairIcon />,
    },
    {
      name: 'Repair',
      icon: <FootIcon />,
    },
    {
      name: 'Name product 5',
      icon: <FootIcon />,
    },
  ];
  const arr = ['A', 'B', 'C', 'D'];
  const [address, setAddress] = useState('');

  const handleAddressChange = (text: any) => {
    setAddress(text);
  };
  const [nom, setNom] = useState('');

  const handleNomChange = (text: any) => {
    setNom(text);
  };
  
  console.log("beginning of listorders");
  
  console.log(listOrders);
  console.log("end of listorders");
   // -------------------------------------------
  // const addOrder = () => {
  //   const newOrder = {
  //     id: listOrders.length + 1,
  //     name: nom,
  //     address: address,
  //   };
  //   setListOrders((prevOrders) => [newOrder, ...prevOrders]);
  // };
  

    // -------------------------------------------
    const testsend = [
      {
        client_name: "Jawher Sallemi",
        delivery_address: "Mansoura, Kairouan",
        product_name: "GTX 1660 TI",
        quantity: "3",
        price: "420"
      },
      {
        client_name: "Jawher Sallemixxxxxxxxxxx",
        delivery_address: "Mansoura, Kairouanxxxxx",
        product_name: "GTX 1660 TIxxxxx",
        quantity: "31",
        price: "420"
      }
    ];
   console.log(listOrders);
  //  ---------------------------------------------------------------------------------------------
  //  const handleAdd = async () => {
      
  //     try {
  //       for (let i = 1; i < listOrders.length; i++) {
  //       const response = await axios.post("http://192.168.1.3:4040/order/createorder", {

  //         client_name: listOrders[0].name,
  //     delivery_address: listOrders[0].address,
  //     product_name: listOrders[i].productName,
  //     quantity: listOrders[i].quantity,
  //     price: listOrders[i].price
  //       });
  //     }
  //       // console.log(Response.data); // Optional: Handle the response data
  //     } catch (error) {
  //       console.error(error);
  //       // Optional: Handle the error
      
  //     }
  //     // Add new product
  //     //setProducts((prevProducts) => [...prevProducts, { ...formProduct, id: Date.now() }]);
  
  //   }
  const handleAddOrder = async () => {
    const newOrder = {
      id: listOrders.length + 1,
      name: nom,
      address: address,
    };
  
    try {
      // Add the new order to the list
      setListOrders((prevOrders) => [newOrder, ...prevOrders]);
  
      // Send the orders to the server
      for (let i = 1; i < listOrders.length; i++) {
        const response = await axios.post("http://192.168.1.6:4040/order/createorder", {
          client_name: listOrders[0].name,
          delivery_address: listOrders[0].address,
          product_name: listOrders[i].productName,
          quantity: listOrders[i].quantity,
          price: listOrders[i].price
        });
        // Handle the response data if needed
        // console.log(response.data);
      }
    } catch (error) {
      console.error(error);
      // Optional: Handle the error
    }
  };

    
  
  
  
  return (
    <View className="flex-1 bg-neutral-200">
      <ScrollView className="bg-neutral-200 flex-1">
        <View className="mt-[90]  ">
        {/* <Button title="Create Order" onPress={handleAdd} /> */}
          <Text className="text-white text-xl pl-8">
            La cliente Zeineb Ben Ammar
          </Text>
          <Text className="text-white opacity-50 text-left text-sm pt-2  pl-8 ">
            Choisissez soigneusement ses produits
          </Text>
          <View className="ml-6 pb-[30]">
            <SearchInput>
              <OrderSearchIcon />
            </SearchInput>
          </View>
        </View>
        <View className="h-[207] border-y border-grey-10 ">
          <View className=" flex-row justify-between mt-3">
            <Text className="text-white pl-5 font-semibold	text-base	">
              Catégorie
            </Text>
            <TouchableOpacity>
              <Text className="text-grey-10 pr-5 font-medium	text-xs pt-1">
                Voir tout &gt;
              </Text>
            </TouchableOpacity>
          </View>
          <View className="mt-[15]">
            <CategoryProductsContainer items={CategoryProductList} />
          </View>
        </View>
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
  <Text className="text-white text-lg m-5">Nom de client </Text>
  <View className="bg-white rounded-xl h-[50]">
   
    <TextInput
      value={nom}
      onChangeText={handleNomChange}
      placeholder="Nom client"
      className="bg-white px-4 py-2 m-5 rounded text-center"
      style={{ textAlign: 'center', textAlignVertical: 'center' }}
      
    />
  </View>
        <View className="ml-3">
          <Text className="text-white text-lg font-medium	p-4">Produits</Text>
          {/* <ProductCardsContainer items={products} deleteOption={false} /> */}
<ProductCardsContainer items={productx} deleteOption={false} placeOrder={placeOrder} listOrders={listOrders} setListOrders={changeOrders}/>
        </View>
       
      </ScrollView>
      <TotalOrder buttonText="Confirmer" listOrders={listOrders} addOrder={handleAddOrder} />

    </View>
  );
};

export default Order;
