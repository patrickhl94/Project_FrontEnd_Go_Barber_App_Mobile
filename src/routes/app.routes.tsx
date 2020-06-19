import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  const App = createStackNavigator();

  return (
    <NavigationContainer>
      <App.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#312e38' },
        }}
      >
        <App.Screen name="Dashboard" component={Dashboard} />
      </App.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
