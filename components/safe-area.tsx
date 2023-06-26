import {View} from 'react-native';
import React from 'react';
import {ReactNode} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const SafeArea = ({children}: {children: ReactNode}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      {children}
    </View>
  );
};

export default SafeArea;
