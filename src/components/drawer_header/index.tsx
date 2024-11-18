import {DrawerHeaderProps} from '@react-navigation/drawer';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {MaterialIcons, SCREEN_WIDTH} from '../../utilities/constants';

const DrawerHeader: React.FC<DrawerHeaderProps> = props => {
  return (
    <SafeAreaView>
      <View style={{width: SCREEN_WIDTH}}>
        <MaterialIcons name={'menu'} size={30} />
      </View>
    </SafeAreaView>
  );
};

export default DrawerHeader;
