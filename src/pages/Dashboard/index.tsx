import React from 'react';
import { Button, View } from 'react-native';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 15,
        paddingHorizontal: 15,
      }}
    >
      <Button color="#999" title="Sair" onPress={signOut} />
    </View>
  );
};

export default Dashboard;
