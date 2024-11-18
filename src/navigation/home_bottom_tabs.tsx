import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeBottomTab from '../screens/home_bottom_tabs/home';
import LibraryBottomTab from '../screens/home_bottom_tabs/library';
import NewBottomTab from '../screens/home_bottom_tabs/new';
import RadioBottomTab from '../screens/home_bottom_tabs/radio';
import SearchBottomTab from '../screens/home_bottom_tabs/search';
import {BottomTabStackParamList} from '../types/navigation';
import {MaterialIcons} from '../utilities/constants';

const BottomTabs = createBottomTabNavigator<BottomTabStackParamList>();

const HomeBottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator screenOptions={{headerShown: false}}>
      <BottomTabs.Screen
        name={'HomeTab'}
        component={HomeBottomTab}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <MaterialIcons name={'home'} size={size} color={color} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <BottomTabs.Screen name={'NewTab'} component={NewBottomTab} />
      <BottomTabs.Screen name={'SearchTab'} component={SearchBottomTab} />
      <BottomTabs.Screen name={'RadioTab'} component={RadioBottomTab} />
      <BottomTabs.Screen name={'LibraryTab'} component={LibraryBottomTab} />
    </BottomTabs.Navigator>
  );
};

export default HomeBottomTabsNavigator;
