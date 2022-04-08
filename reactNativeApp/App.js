/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';

const App = () => {
  const [showExplanation, setShowExplanation] = useState(true);
  const [newTodo, setNewTodo] = useState('');
  const [timesPressed, setTimesPressed] = useState(0);

  const handleInstructionsPress = () => {
    setShowExplanation(prevState => !prevState);
    setTimesPressed(prevState => prevState + 1);
  };

  const handleChangeText = text => {
    setNewTodo(text.toUpperCase());
  };

  useEffect(() => {
    // acción cuando el componente fue renderizado
    console.log('Fui renderizado');
    return () => {
      // acción cuando el componente fue removido
      console.log('Fui removido');
    };
  }, []);

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

      <TextInput
        value={newTodo}
        onChangeText={handleChangeText}
        placeholder="Ingrese el nuevo todo"
        style={styles.textInput}
      />

      <Text style={styles.normalText}>
        El botón se presionó: {timesPressed} veces
      </Text>
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
  normalText: {
    fontSize: 20,
    color: '#A348A6',
    marginTop: 20,
  },
  textInput: {
    borderColor: '#979797',
    borderWidth: 2,
    width: '95%',
    padding: 10,
    borderRadius: 10,
  },
});

export default App;
