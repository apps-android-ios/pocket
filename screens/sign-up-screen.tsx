import {Text, Button, View} from 'react-native';
import React from 'react';

import SafeArea from '../components/safe-area';

const SignUpScreen = ({navigation}) => {
  return (
    <SafeArea>
      <View>
        <Text>SignUpScreen</Text>
        <Button title="signIn" onPress={() => navigation.navigate('SignIn')} />
      </View>
    </SafeArea>
  );
};

export default SignUpScreen;
