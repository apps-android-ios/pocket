import {Text, Button, View} from 'react-native';
import React from 'react';

import SafeArea from '../components/safe-area';

const SignInScreen = ({navigation}) => {
  return (
    <SafeArea>
      <Text>SignInScreen</Text>
      <Button title="signUp" onPress={() => navigation.navigate('SignUp')} />
    </SafeArea>
  );
};

export default SignInScreen;
