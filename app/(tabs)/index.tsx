import React from 'react';
import { SafeAreaView } from 'react-native';
import Calculator from '../../src/Forms/FormObj';
import styles from '../../src/Forms/FormStyle';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Calculator />
    </SafeAreaView>
  );
};

export default App;