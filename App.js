/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Animated, StyleSheet, Text, View, Dimensions } from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import BottomSheet from "./BottomSheet";



class App extends React.Component {
  render() {
    return <BottomSheet />
     
    
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
});




export default App;
