import {DrawerScreenProps} from '@react-navigation/drawer';
import React from 'react';
import {Text, View} from 'react-native';
import {DrawerStackParamList} from '../../../types/navigation';

type DrawerScreenTwoProps = DrawerScreenProps<
  DrawerStackParamList,
  'DrawerScreenTwo'
>;

const DrawerScreenTwo: React.FC<DrawerScreenTwoProps> = props => {
  const {navigation} = props;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>DrawerScreenTwo</Text>
    </View>
  );
};

export default DrawerScreenTwo;
