import React from 'react';
import { Svg } from 'react-native-svg';
import { Path } from 'react-native-svg';

function NotificationsIcon() {
  return (
    <Svg width="16" height="20" fill="none" viewBox="0 0 16 20">
      <Path
        fill="#DAD7E0"
        d="M15.333 18.25a.917.917 0 01-1.402.78l-5.445-3.41a.917.917 0 00-.972 0L2.07 19.03a.917.917 0 01-1.402-.78V2.667c0-1.013.82-1.834 1.833-1.834h11c1.012 0 1.833.821 1.833 1.834V18.25z"
      />
    </Svg>
  );
}

export default NotificationsIcon;
