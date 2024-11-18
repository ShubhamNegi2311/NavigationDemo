import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import DrawerScreenOne from '../screens/home_drawer/drawer_screen_one';
import {DrawerStackParamList} from '../types/navigation';

const Drawer = createDrawerNavigator<DrawerStackParamList>();

const HomeDrawer: React.FC = props => {
  return (
    <Drawer.Navigator screenOptions={{}}>
      <Drawer.Screen name={'DrawerScreenOne'} component={DrawerScreenOne} />
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
