import React from 'react';
import { Svg } from 'react-native-svg';
import { Path } from 'react-native-svg';

function ProfileIcon() {
  return (
    <Svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <Path
        fill="#DAD7E0"
        fillRule="evenodd"
        d="M10.003.833a4.584 4.584 0 104.585 4.584A4.584 4.584 0 0010.003.833zm7.335 13.53l1.733 3.474a.917.917 0 01-.816 1.33H1.75a.917.917 0 01-.816-1.33l1.733-3.474a4.585 4.585 0 014.099-2.53h6.474c1.735 0 3.321.98 4.098 2.53z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

export default ProfileIcon;
