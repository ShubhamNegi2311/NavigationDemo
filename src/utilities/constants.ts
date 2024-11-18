import {Dimensions} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} =
  Dimensions.get('screen');
export const {height: WINDOW_HEIGHT, width: WINDOW_WIDTH} =
  Dimensions.get('window');

export const MaterialIcons = MaterialCommunityIcons;
