import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, View} from 'react-native';
import {BottomTabStackParamList} from '../../../types/navigation';

type SearchBottomTabProps = BottomTabScreenProps<
  BottomTabStackParamList,
  'SearchTab'
>;

const SearchBottomTab: React.FC<SearchBottomTabProps> = props => {
  return (
    <View>
      <Text>SearchBottomTab</Text>
    </View>
  );
};

export default SearchBottomTab;
