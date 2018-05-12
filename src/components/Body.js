import { Platform } from 'react-native';

import { BodyAndroid } from './BodyAndroid';
import { BodyIOS } from './BodyIOS'

export const Body = Platform.select({
  ios: BodyIOS,
  android: BodyAndroid
});