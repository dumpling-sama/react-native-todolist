import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  header: { 
    padding: 15,
  },

  text: {
    fontSize: 32,
    fontWeight: '800'
  }
})