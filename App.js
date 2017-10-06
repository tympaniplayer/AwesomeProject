import React from 'react';
import { Root, Container } from 'native-base';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';
import AppFooter from './components/AppFooter';

class App extends React.Component {
  
  render() {
    return (
      <Container>
        <AppHeader />
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

export default () => 
  <Root>
    <App />
  </Root>;
