/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => {
  const showExplanation = true;

  return (
    <SafeAreaView style={styles.contentView}>
      <Text style={styles.title}>Lista de tareas</Text>

      {showExplanation && (
        <Text>Aquí tienes tu lista de tareas pendientes</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
});

export default App;
