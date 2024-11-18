import {DrawerScreenProps} from '@react-navigation/drawer';
import React from 'react';
import {Text, View} from 'react-native';
import {DrawerStackParamList} from '../../../types/navigation';

type DrawerScreenThreeProps = DrawerScreenProps<
  DrawerStackParamList,
  'DrawerScreenThree'
>;

const DrawerScreenThree: React.FC<DrawerScreenThreeProps> = props => {
  const {navigation} = props;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>DrawerScreenThree</Text>
    </View>
  );
};

export default DrawerScreenThree;
