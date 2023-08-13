import { ScrollView, Text, View } from '@/ui';
import CategoryProductsContainer from '@/ui/components/category-product-container';
// import BottomMenu from '@/navigation/bottom-menu';
import CategorySearchIcon from '@/ui/components/icons/category-search-icon';
import FootIcon from '@/ui/components/icons/foot-icon';
import ParChequeIcon from '@/ui/components/icons/par-cheque-icon';
import SettingIcon from '@/ui/components/icons/setting-icon';
import ProductCardsContainer from '@/ui/components/product-cards-container';
import SubCategory from '@/ui/components/sub-category';
import SearchInput from '@/ui/core/input/search-input';
import RepairIcon from '@/ui/icons/repair-icon';
import colors from '@/ui/theme/colors';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Category = () => {
  const [productx, setProductx] = useState([]);
  useEffect(() => {
    console.log("only use effect")
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://192.168.1.6:4040/products/product');
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
  const products = [
    {
      id: 1,
      productName: 'SVR masque ',
      price: 10.99,
      description: ' Purifie, hydrate et illumine la peau',
      productImage: require('../../../assets/product1.png'),
    },
    {
      id: 2,
      productName: 'Masque hydratant à laloe vera',
      price: 19.99,
      description: 'Intensément et apaise la peau.',
      productImage: require('../../../assets/product2.png'),
    },
    {
      id: 3,
      productName: 'Masque éclat à la vitamine C',
      price: 7.99,
      description: ' Ravive léclat naturel de la peau,',
      productImage: require('../../../assets/product3.png'),
    },
    {
      id: 3,
      productName: 'Masque éclat à la vitamine C',
      price: 7.99,
      description: ' Ravive léclat naturel de la peau,',
      productImage: require('../../../assets/products/switch.jpg'),
    },
  ];
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
      icon: <SettingIcon />,
    },
    {
      name: 'Name product 5',
    },
  ];
  return (
    <>
      <View className="flex-1 bg-neutral-200">
        <ScrollView>
          <View className="h-[274] bg-neutral-50 rounded-bl-[50] relative">
            <View className="mt-[50] ml-[26]">
              <Text className="text-neutral-750 font-bold text-2xl">
                Catégories
              </Text>
              <Text className="text-neutral-100 font-light text-sm">
                Recherche par catégorie?
              </Text>
            </View>
            <View className="ml-[28]">
              <SearchInput
                rounded="rounded-2xl"
                bg="bg-white"
                placeholder="Search"
                isVisible={false}
                placeholderTextColor={colors.neutral[60]}
                // 'border-white/[.4]'
              >
                <CategorySearchIcon />
              </SearchInput>
            </View>
          </View>
          <View className="absolute left-[15] top-[210] z-20">
            <CategoryProductsContainer items={CategoryProductList} />
            {/* <SubCategory /> */}
          </View>
          <View className="mt-[100]">
            <View className="mb-7 flex-row pl-7 space-x-7">
              <View>
                <SubCategory texts="yeux et lévre" />
              </View>
              <View>
                <SubCategory texts="Maquillage"  />
              </View>
            </View>
            <View>
              <ProductCardsContainer items={productx} deleteOption={false} />
            </View>
          </View>
        </ScrollView>
      </View>
      {/* <BottomMenu /> */}
    </>
  );
};
export default Category;
