import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, View} from 'react-native';
import {BottomTabStackParamList} from '../../../types/navigation';

type LibraryBottomTabProps = BottomTabScreenProps<
  BottomTabStackParamList,
  'LibraryTab'
>;

const LibraryBottomTab: React.FC<LibraryBottomTabProps> = props => {
  return (
    <View>
      <Text>LibraryBottomTab</Text>
    </View>
  );
};

export default LibraryBottomTab;
