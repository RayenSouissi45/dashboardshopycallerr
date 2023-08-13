import { TouchableOpacity } from 'react-native';

import { View } from '@/ui/core';

const GreenCircle = ({ children }: any) => {
  return (
    <TouchableOpacity>
      <View className="h-[50] w-[50] bg-green-10  rounded-full shadow-lg justify-center items-center">
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default GreenCircle;
