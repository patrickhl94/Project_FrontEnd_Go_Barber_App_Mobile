import React from 'react';
import { Text, StatusBar } from 'react-native';

import { Container } from './styles';

const SignUp: React.FC = () => {
  return (
    <Container style={{ backgroundColor: '#312e38', flex: 1 }}>
      <StatusBar backgroundColor="#312e38" barStyle="light-content" />
      <Text>App</Text>
    </Container>
  );
};

export default SignUp;
