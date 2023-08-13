import { styled } from 'nativewind';
import type { ReactNode } from 'react';
import React from 'react';
import { TextInput } from 'react-native';

import GreenCircle from '@/ui/components/green-circle';
import FilterIcon from '@/ui/components/icons/filter-icon';

import colors from '../../theme/colors';
import { View } from '../view';

// interface SearchInputProps {
//   rounded?: string;
//   placeholder?: string;
//   bg?: string;
//   isVisible?: boolean;
//   placeholderTextColor?: string;

//   children?: ReactElement;
// }

const STextInput = styled(TextInput);

const SearchInput = ({
  rounded = 'rounded-3xl',
  placeholder = 'Chercher les produits convernables',
  bg = 'bg-white/[.1]',
  isVisible = true,
  placeholderTextColor = colors.grey[10],
  borderColor = 'border-white/[.4]',
  children,
}: {
  rounded?: string;
  placeholder?: string;
  bg?: string;
  isVisible?: boolean;
  placeholderTextColor?: string;
  borderColor?: string;
  children?: ReactNode;
}) => {
  return (
    <View
      className={`flex-row items-center space-x-[8] h-[57] w-[324] rounded-xl ${rounded}
       border ${bg} mt-5 ${borderColor}`}
    >
      <View className="ml-5">
        {/* icon */}
        {children}
      </View>
      <STextInput
        className=" rounded-xl text-center "
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
      <View className="">
        {isVisible && (
          <GreenCircle>
            <FilterIcon />
          </GreenCircle>
        )}
      </View>
    </View>
  );
};

export default SearchInput;
