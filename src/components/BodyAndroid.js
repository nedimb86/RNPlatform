import React from 'react';
import { View, Text, Platform } from 'react-native';
import {styles} from "../theme/Style";

export const BodyAndroid = () => (
  <View style={styles.body}>
    <Text style={styles.h1}>This is Android App!</Text>
    <Text style={styles.h1}>You are running Android {Platform.Version}</Text>
  </View>
);