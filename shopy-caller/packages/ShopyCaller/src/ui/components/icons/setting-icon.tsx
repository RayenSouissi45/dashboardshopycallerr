import React from 'react';
import { Svg } from 'react-native-svg';
import { Path } from 'react-native-svg';

function SettingIcon() {
  return (
    <Svg width="13" height="21" fill="none" viewBox="0 0 13 21">
      <Path
        fill="#6427FF"
        fillRule="evenodd"
        d="M19.042 12.66l.833.69c.395.32.501.881.25 1.325l-1.208 2.087a1.04 1.04 0 01-1.198.45l-1.042-.377a2.08 2.08 0 00-1.854.199c-.245.17-.503.32-.77.449a2.087 2.087 0 00-1.105 1.513l-.177 1.044c-.083.51-.526.883-1.042.877H9.333a1.042 1.042 0 01-1.041-.877l-.177-1.044a2.087 2.087 0 00-1.105-1.513 5.713 5.713 0 01-.77-.45 2.08 2.08 0 00-1.855-.198l-1.041.376a1.04 1.04 0 01-1.26-.449L.874 14.675a1.045 1.045 0 01.25-1.326l.833-.688a2.09 2.09 0 00.75-1.712v-.898a2.09 2.09 0 00-.75-1.712l-.833-.689a1.045 1.045 0 01-.25-1.325l1.208-2.088a1.04 1.04 0 011.24-.448l1.042.375a2.08 2.08 0 001.854-.198c.245-.17.502-.32.77-.449.57-.31.964-.87 1.063-1.513L8.23.96c.083-.51.526-.883 1.042-.877h2.396c.516-.006.959.367 1.041.877l.177 1.044a2.087 2.087 0 001.105 1.513c.268.13.525.28.77.45a2.08 2.08 0 001.855.197l1.041-.375a1.04 1.04 0 011.26.448l1.209 2.088a1.045 1.045 0 01-.25 1.325l-.833.69a2.09 2.09 0 00-.75 1.711v.898a2.09 2.09 0 00.75 1.712zM7.375 10.5c0 1.73 1.4 3.131 3.125 3.131.829 0 1.624-.33 2.21-.917a3.134 3.134 0 00-2.21-5.345 3.128 3.128 0 00-3.125 3.13z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

export default SettingIcon;