import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import { Root } from 'native-base';
import SideBar from './components/SideBar';
import HomeScreen from './components/HomeScreen';

const App = DrawerNavigator({
  Home: { screen: HomeScreen }
},{
  contentComponent: props => <SideBar {...props} />
}
);

export default () =>
  <Root>
    <App />
  </Root>;