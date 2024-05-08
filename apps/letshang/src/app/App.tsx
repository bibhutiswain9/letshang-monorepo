import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import { SolidButton } from '@letshang/components';
import HOC from 'libs/root/src/initializer';
export default function App() {
  return (
    <HOC>
      <View style={styles.container}>
        <SolidButton />
      </View>
    </HOC>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
