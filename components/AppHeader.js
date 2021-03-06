import React, { Component } from 'react';
import { Header, Left, Button, Icon, Title, Right, Body } from 'native-base'

export default class AppHeader extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent
                    onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Header</Title>
                </Body>
                <Right />
            </Header>
        )
    }
}