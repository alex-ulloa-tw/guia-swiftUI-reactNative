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

  const handleInstructionsPress = () => {
    setShowExplanation(prevState => !prevState);
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
  textInput: {
    borderColor: '#979797',
    borderWidth: 2,
    width: '95%',
    padding: 10,
    borderRadius: 10,
  },
});

export default App;
