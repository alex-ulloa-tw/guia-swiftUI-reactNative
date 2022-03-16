/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => {
  const [showExplanation, setShowExplanation] = useState(true);

  const handleInstructionsPress = () => {
    setShowExplanation(prevState => !prevState);
  };

  useEffect(() => {
    // acción cuando cambia la variable showExplanation
    console.log('nuevo valor', showExplanation);
  }, [showExplanation]);

  return (
    <SafeAreaView style={styles.contentView}>
      <Text style={styles.title}>Lista de tareas</Text>

      {showExplanation && (
        <Text>Aquí tienes tu lista de tareas pendientes</Text>
      )}

      <Button
        title={`${showExplanation ? 'Ocultar' : 'Mostrar'} instrucciones`}
        onPress={handleInstructionsPress}
      />
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
