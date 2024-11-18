export type AppStackParamList = {
  HomeScreen: undefined;
  ProfileScreen: {userId: string};
  SettingsScreen: {userName: string};
};

export type DrawerStackParamList = {
  DrawerScreenOne: undefined;
  DrawerScreenTwo: undefined;
  DrawerScreenThree: undefined;
  DrawerScreenFour: undefined;
};

export type BottomTabStackParamList = {
  HomeTab: undefined;
  LibraryTab: undefined;
  RadioTab: undefined;
  SearchTab: undefined;
  NewTab: undefined;
};
