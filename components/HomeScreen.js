import React from 'react';
import { Root, Container } from 'native-base';
import AppHeader from './AppHeader';
import AppContent from './AppContent';
import AppFooter from './AppFooter';

export default class HomeScreen extends React.Component {

  render() {
    return (
      <Container>
        <AppHeader navigation={this.props.navigation}/>
        <AppContent />
        <AppFooter />
      </Container>
    );
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });
  }
}
