import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  let name = 'Gabriel Sousa';

  return (
    <View style={style.container}>
      <Text>Olá</Text>
      <Text>{name}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})