import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        '#FF0000', 
        '#FF7F00', 
        '#FFFF00', 
        '#00FF00', 
        '#0000FF', 
        '#4B0082', 
        '#9400D3' 
      ],
    }
  }

  render() {
    const views = this.state.colors.map(color => (
      <View key={color} style={{ flex:1, backgroundColor: color }}/>
    ));
    return (
      <View style={styles.container}>
        {views}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  redContainer: {
    flex: 1,
    backgroundColor: 'red',
  },
  greenContainer: {
    flex: 1,
    backgroundColor: 'green',
  },
});
