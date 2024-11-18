import {Button, Text} from '@react-navigation/elements';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import SpaceView from '../../components/space_view';
import {AppStackParamList} from '../../types/navigation';
import {SCREEN_WIDTH} from '../../utilities/constants';

type ProfileScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'ProfileScreen'
>;

const ProfileScreen: React.FC<ProfileScreenProps> = props => {
  const {
    navigation,
    route: {
      params: {userId},
    },
  } = props;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text children={userId} />
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
        children={'Navigate to Settings'}
        onPress={() => {
          navigation.popTo('SettingsScreen', {
            userName: 'Anvril Stiisu',
          });
        }}
        style={{borderRadius: 12, width: SCREEN_WIDTH * 0.6}}
      />
    </View>
  );
};

export default ProfileScreen;
