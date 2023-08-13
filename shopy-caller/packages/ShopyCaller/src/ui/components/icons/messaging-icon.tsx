import React from 'react';
import { Svg } from 'react-native-svg';
import { Path } from 'react-native-svg';

function MessagingIcon() {
  return (
    <Svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <Path
        fill="#DAD7E0"
        fillRule="evenodd"
        d="M4.5.833h11A3.667 3.667 0 0119.167 4.5v7.333A3.667 3.667 0 0115.5 15.5H6.333a2.75 2.75 0 00-1.97.78l-2.75 2.75a.45.45 0 01-.321.137.458.458 0 01-.459-.459V4.5A3.667 3.667 0 014.5.833zm2.292 8.25a.458.458 0 00.458-.458v-.917a.458.458 0 00-.458-.458h-.917a.458.458 0 00-.458.458v.917c0 .253.205.458.458.458h.917zm4.125-.458a.458.458 0 01-.459.458h-.916a.458.458 0 01-.459-.458v-.917c0-.253.206-.458.459-.458h.916c.253 0 .459.205.459.458v.917zm3.208.458a.458.458 0 00.458-.458v-.917a.458.458 0 00-.458-.458h-.917a.458.458 0 00-.458.458v.917c0 .253.205.458.458.458h.917z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

export default MessagingIcon;
