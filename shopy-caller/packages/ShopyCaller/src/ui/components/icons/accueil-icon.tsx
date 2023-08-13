import React from 'react';
import { Svg } from 'react-native-svg';
import { Path } from 'react-native-svg';

function AccueilIcon({}) {
  return (
    <Svg width="19" height="17" fill="none" viewBox="0 0 19 17">
      <Path
        fill="#DAD7E0"
        d="M18.067 7.067L11.266.266A.917.917 0 0010.624 0H7.71a.917.917 0 00-.641.266L.266 7.067A.917.917 0 000 7.71v1c0 .252.205.458.458.458h1.375v6.416c0 .507.41.917.917.917H5.5c.506 0 .917-.41.917-.917v-5.041c0-.253.205-.459.458-.459h4.583c.253 0 .459.206.459.459v5.041c0 .507.41.917.916.917h2.75c.507 0 .917-.41.917-.917V9.167h1.375a.458.458 0 00.458-.459V7.71a.917.917 0 00-.265-.641z"
      />
    </Svg>
  );
}

export default AccueilIcon;
