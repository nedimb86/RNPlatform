import React from 'react';
import { View} from 'react-native';
import {styles} from "./src/theme/Style";
import { Header } from './src/components/Header';
import { Body } from "./src/components/Body";
import { Footer } from "./src/components/Footer";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Body />
        <Footer />
      </View>
    );
  }
}


