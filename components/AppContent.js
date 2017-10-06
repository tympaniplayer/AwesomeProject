import React, { Component } from 'react';
import { Content, Card, CardItem, Body, Text, Button, Toast } from 'native-base';

export default class AppContent extends Component {
  handlePress () {
    Toast.show({
      text: 'I\'m a toast!',
      position: 'bottom',
      buttonText: 'Okay'
    });
  }
  render() {
    return (
      <Content>
        <Card>
          <CardItem>
            <Body>
              <Text>
                Hello. Check out this sweet card!
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Button full
          onPress={this.handlePress}>
          <Text>
            Click me!
          </Text>
        </Button>
      </Content>
    )
  }
}