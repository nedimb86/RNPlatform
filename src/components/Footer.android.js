import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.text}>I am Android Footer</Text>
  </View>
);

const styles = StyleSheet.create({
  footer: {
    height: 50,
    backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 24
  }
});