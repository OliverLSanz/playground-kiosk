import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const { ipcRenderer } = require('electron');

export default function App() {
  return (
    <View style={styles.container}>
      <Pressable onPress={()=>{
        ipcRenderer.send('print')
        console.log(`print message sent`)
      }}><Text>PRESS ME TO PRINT!</Text></Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
