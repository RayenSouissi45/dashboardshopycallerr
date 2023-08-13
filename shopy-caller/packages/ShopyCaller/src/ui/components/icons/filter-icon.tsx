import React from 'react';
import { Svg } from 'react-native-svg';
import { Path } from 'react-native-svg';

function FilterIcon() {
  return (
    <Svg width="16" height="14" fill="none" viewBox="0 0 16 14">
      <Path
        fill="#060124"
        d="M3 1a1 1 0 10-2 0v7.268a2 2 0 000 3.464V13a1 1 0 102 0v-1.268a2 2 0 000-3.464V1zm6 0a1 1 0 10-2 0v1.268a2 2 0 000 3.464V13a1 1 0 102 0V5.732a2 2 0 000-3.464V1zm5-1a1 1 0 011 1v7.268a2 2 0 010 3.464V13a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V1a1 1 0 011-1z"
      />
    </Svg>
  );
}

export default FilterIcon;
