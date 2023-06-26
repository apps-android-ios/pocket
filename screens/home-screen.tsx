import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text></Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

export default HomeScreen;
