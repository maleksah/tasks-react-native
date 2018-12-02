import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';

export default class AppHeader extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Header
          leftComponent={ {icon: 'menu', color: '#fff'} }
          centerComponent={ {text: 'Tasks', style: {color: '#fff'}} }
          rightComponent={ {icon: 'add', color: '#fff'} }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});