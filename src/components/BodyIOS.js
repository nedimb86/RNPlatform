import React from 'react';
import { View, Text, Platform } from 'react-native';
import {styles} from "../theme/Style";

export const BodyIOS = () => (
  <View style={styles.body}>
    <Text style={styles.h1}>This is iOS App!</Text>
    <Text style={styles.h1}>You are running iOS {parseInt(Platform.Version, 10)}</Text>
  </View>
);