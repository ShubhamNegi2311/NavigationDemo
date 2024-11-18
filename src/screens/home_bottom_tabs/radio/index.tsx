import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, View} from 'react-native';
import {BottomTabStackParamList} from '../../../types/navigation';

type RadioBottomTabProps = BottomTabScreenProps<
  BottomTabStackParamList,
  'RadioTab'
>;

const RadioBottomTab: React.FC<RadioBottomTabProps> = props => {
  return (
    <View>
      <Text>RadioBottomTab</Text>
    </View>
  );
};

export default RadioBottomTab;
