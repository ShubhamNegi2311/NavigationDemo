import {DrawerScreenProps} from '@react-navigation/drawer';
import React from 'react';
import {Text, View} from 'react-native';
import {DrawerStackParamList} from '../../../types/navigation';

type DrawerScreenFourProps = DrawerScreenProps<
  DrawerStackParamList,
  'DrawerScreenFour'
>;

const DrawerScreenFour: React.FC<DrawerScreenFourProps> = props => {
  const {navigation} = props;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>DrawerScreenFour</Text>
    </View>
  );
};

export default DrawerScreenFour;
