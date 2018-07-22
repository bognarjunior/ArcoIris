import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        'red', 
        'orange', 
        'yellow', 
        'green', 
        'blue', 
        'indigo', 
        'violet' 
      ],
    }
  }

  componentDidMount() {
    const intervalInms = 1000;
    setInterval(() => {
      const lastColor = this.state.colors.slice(-1);
      const listWithoutLast = this.state.colors.slice(0, -1);
      this.setState({ colors: lastColor.concat(listWithoutLast) })
    }, intervalInms)
  }

  createViews = () => ( 
    this.state.colors.map( color => ( <View key={color} style={[styles.container, styles[`${color}Bg`]]}/> ) )
  );

  render() {
    return (
      <View style={styles.container}>
        {this.createViews()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  redBg: {
    backgroundColor: '#FF0000'
  },
  orangeBg: {
    backgroundColor: '#FF7F00'
  },
  yellowBg: {
    backgroundColor: '#FFFF00'
  },
  greenBg: {
    backgroundColor: '#00FF00'
  },
  blueBg: {
    backgroundColor: '#0000FF'
  },
  indigoBg: {
    backgroundColor: '#4B0082'
  },
  violetBg: {
    backgroundColor: '#9400D3'
  },
});
