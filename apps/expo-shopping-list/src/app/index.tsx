import React from 'react';
import { View, Text } from 'react-native';

const index = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
      }}
    >
      <Text style={{ color: 'black', fontSize: 20 }}>Shopping list</Text>
    </View>
  );
};

export default index;
