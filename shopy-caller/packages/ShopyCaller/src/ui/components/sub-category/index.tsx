import { TouchableOpacity } from 'react-native';

import { Text, View } from '@/ui';

const SubCategory = ({texts} : any) => {
  return (
    <TouchableOpacity>
      <View className="h-[181] w-[140] bg-white rounded-3xl">
        <Text className="text-blueText-10 font-medium mt-6 ml-8">
          {texts}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default SubCategory;
