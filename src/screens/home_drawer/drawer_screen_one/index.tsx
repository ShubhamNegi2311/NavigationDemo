import {DrawerScreenProps} from '@react-navigation/drawer';
import React from 'react';
import HomeBottomTabsNavigator from '../../../navigation/home_bottom_tabs';
import {DrawerStackParamList} from '../../../types/navigation';

type DrawerScreenOneProps = DrawerScreenProps<
  DrawerStackParamList,
  'DrawerScreenOne'
>;

const DrawerScreenOne: React.FC<DrawerScreenOneProps> = props => {
  const {navigation} = props;
  const [searchText, setSearchText] = React.useState<string>('');

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: 'Search...',
        onChangeText: value => setSearchText(value.nativeEvent.text),
      },
    });
  }, []);

  return <HomeBottomTabsNavigator />;
};

export default DrawerScreenOne;
