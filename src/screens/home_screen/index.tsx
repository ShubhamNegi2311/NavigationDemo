import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import HomeDrawer from '../../navigation/home_drawer';
import {AppStackParamList} from '../../types/navigation';

type HomeScreenProps = NativeStackScreenProps<AppStackParamList, 'HomeScreen'>;

const HomeScreen: React.FC<HomeScreenProps> = props => {
  const {navigation} = props;
  return <HomeDrawer />;
};

export default HomeScreen;
