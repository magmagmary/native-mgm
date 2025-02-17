import React from 'react';
import {
  StyleSheet,
  View,
  Text,

} from 'react-native';
import { Button } from '@native-magmag/ui';


export const App = () => {

  return (
    <View
      style={styles.container}
    >
      <Text
        style={[styles.textXL, styles.appTitleText]}
      >
        Welcome NativeMgms
      </Text>
      <Button onPress={() => undefined} title='Hello' styles={{ marginTop: 16 }} />

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textXL: {
    fontSize: 24,
  },
  appTitleText: {
    fontWeight: 'bold',
  },
});

export default App;
