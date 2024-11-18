import {Button, Text} from '@react-navigation/elements';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import SpaceView from '../../components/space_view';
import {AppStackParamList} from '../../types/navigation';
import {SCREEN_WIDTH} from '../../utilities/constants';

type SettingsScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'SettingsScreen'
>;

const SettingsScreen: React.FC<SettingsScreenProps> = props => {
  const {
    navigation,
    route: {
      params: {userName},
    },
  } = props;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text children={`Welcome, ${userName}`} />
      <SpaceView height={20} />
      <Button
        children={'Navigate to Home Screen'}
        onPress={() => {
          navigation.popTo('HomeScreen');
        }}
        style={{borderRadius: 12, width: SCREEN_WIDTH * 0.6}}
      />
      <SpaceView height={20} />
      <Button
        children={'Navigate to Profile'}
        onPress={() => {
          navigation.popTo('ProfileScreen', {
            userId: '87a6d876a8d76as87d687',
          });
        }}
        style={{borderRadius: 12, width: SCREEN_WIDTH * 0.6}}
      />
    </View>
  );
};

export default SettingsScreen;
