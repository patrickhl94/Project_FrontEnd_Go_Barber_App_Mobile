import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';

import AppProvider from './hooks';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <AppProvider>
      <View style={{ backgroundColor: '#312e38', flex: 1 }}>
        <StatusBar backgroundColor="#312e38" barStyle="light-content" />
        <Routes />
      </View>
    </AppProvider>
  );
};

export default App;
