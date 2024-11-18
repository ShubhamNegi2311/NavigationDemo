import {RealmProvider} from '@realm/react';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import UserData from './src/data_models/realm_data_models/UserData';
import AppNavigator from './src/navigation/app_navigator';

const App = () => {
  return (
    <RealmProvider
      schema={[UserData]}
      fallback={<ActivityIndicator size={'large'} />}>
      <AppNavigator />
    </RealmProvider>
  );
};

export default App;
