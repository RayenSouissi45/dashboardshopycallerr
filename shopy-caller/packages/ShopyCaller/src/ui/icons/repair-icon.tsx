import React from 'react';
import { Svg } from 'react-native-svg';
import { Path } from 'react-native-svg';

function RepairIcon() {
  return (
    <Svg width="19" height="19" fill="none" viewBox="0 0 19 19">
      <Path
        fill="#6427FF"
        d="M18.875 3.965v.334a4.17 4.17 0 01-4.167 4.173 4.047 4.047 0 01-1.625-.334L2.667 18.572a1.04 1.04 0 01-.73.303H1.72a1.04 1.04 0 01-.73-.303l-.562-.563a1.044 1.044 0 01-.302-.73v-.188c.001-.274.11-.536.302-.73L10.844 5.925a4.063 4.063 0 01-.302-1.627A4.17 4.17 0 0114.708.125h.334c.14 0 .275.057.375.157l.177.177a.522.522 0 010 .74l-1.625 1.628a.522.522 0 000 .73l1.479 1.482a.53.53 0 00.73 0l1.655-1.627a.52.52 0 01.74 0l.177.177a.533.533 0 01.125.376z"
      />
    </Svg>
  );
}

export default RepairIcon;
