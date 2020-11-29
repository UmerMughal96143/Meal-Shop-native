import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationHandler from './navigation/Handler';
// import {useScreens} from 'react-native-screens';





export default function App() {
  return <NavigationHandler/>
}

const styles = StyleSheet.create({
  container: {
    flex : 1 ,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
