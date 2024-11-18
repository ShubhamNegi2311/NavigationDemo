import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, View} from 'react-native';
import {BottomTabStackParamList} from '../../../types/navigation';

type NewBottomTabProps = BottomTabScreenProps<
  BottomTabStackParamList,
  'NewTab'
>;

const NewBottomTab: React.FC<NewBottomTabProps> = props => {
  return (
    <View>
      <Text>NewBottomTab</Text>
    </View>
  );
};

export default NewBottomTab;
