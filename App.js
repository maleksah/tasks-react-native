import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import TodoList from './components/TodoList';
import AppHeader from './components/Header';

export default class App extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <AppHeader/>
        <TodoList/>
      </View>
    );
  }

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  componentWillUnmount() {
    StatusBar.setHidden(false);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
