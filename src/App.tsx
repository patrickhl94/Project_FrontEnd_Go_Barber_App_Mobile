import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <View style={{ backgroundColor: '#312e38', flex: 1 }}>
      <StatusBar backgroundColor="#312e38" barStyle="light-content" />
      <Routes />
    </View>
  );
};

export default App;
