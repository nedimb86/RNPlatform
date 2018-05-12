import React from 'react';
import { View, Text} from 'react-native';
import {styles} from "../theme/Style";

export const BodyIOS = () => (
  <View style={styles.body}>
    <Text style={styles.h1}>This is iOS App!</Text>
  </View>
);