import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {useQuery, useRealm} from '@realm/react';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import SpaceView from '../../../components/space_view';
import UserData from '../../../data_models/realm_data_models/UserData';
import {BottomTabStackParamList} from '../../../types/navigation';
import {SCREEN_WIDTH} from '../../../utilities/constants';

type HomeBottomTabProps = BottomTabScreenProps<
  BottomTabStackParamList,
  'HomeTab'
>;

const HomeBottomTab: React.FC<HomeBottomTabProps> = props => {
  const realm = useRealm();
  const query = useQuery({
    type: UserData,
  });

  const getDataFromRealmDB = React.useCallback(() => {
    console.log('DB DATA ===>', JSON.stringify(query));
  }, [realm]);

  const setDataInRealmDB = React.useCallback(() => {
    realm.write(() =>
      realm.create('UserData', UserData.generate('Shubham Negi', 'Developer')),
    );
    console.log('Data Stored Successfully.');
  }, [realm]);

  const deleteDataFromRealmDB = React.useCallback(() => {
    const item = query.filter(item => item.name === 'Shubham Negi');

    console.log('ITEM ==>', JSON.stringify(item));

    if (item && item.length > 0) {
      // delete item from db
      realm.write(() => realm.delete(item[0]));
    }
  }, [realm]);

  const updateDataIntoRealmDB = React.useCallback(() => {
    const item = query.filter(item => item.name === 'Shubham Negi');
    if (item && item.length > 0) {
      // delete item from db
      realm.write(() => (item[0].name = 'Rajat Chauhan'));
    }
  }, [realm]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        {'Realm DB Implementation'}
      </Text>
      <SpaceView height={20} />
      <TouchableOpacity
        style={{
          paddingVertical: 18,
          width: SCREEN_WIDTH * 0.7,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'teal',
          borderRadius: 12,
        }}
        onPress={setDataInRealmDB}
        children={
          <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>
            {'Store Data'}
          </Text>
        }
      />
      <SpaceView height={20} />

      <TouchableOpacity
        style={{
          paddingVertical: 18,
          width: SCREEN_WIDTH * 0.7,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'teal',
          borderRadius: 12,
        }}
        onPress={getDataFromRealmDB}
        children={
          <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>
            {'Get Data'}
          </Text>
        }
      />

      <SpaceView height={20} />

      <TouchableOpacity
        style={{
          paddingVertical: 18,
          width: SCREEN_WIDTH * 0.7,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'teal',
          borderRadius: 12,
        }}
        onPress={deleteDataFromRealmDB}
        children={
          <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>
            {'Delete Data'}
          </Text>
        }
      />

      <SpaceView height={20} />

      <TouchableOpacity
        style={{
          paddingVertical: 18,
          width: SCREEN_WIDTH * 0.7,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'teal',
          borderRadius: 12,
        }}
        onPress={updateDataIntoRealmDB}
        children={
          <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>
            {'Update Data'}
          </Text>
        }
      />
    </View>
  );
};

export default HomeBottomTab;
