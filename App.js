import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import AppHeader from './components/Header';

export default class App extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <AppHeader/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
