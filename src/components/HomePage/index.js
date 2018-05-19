// @flow
import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableHighlight } from 'react-native';
import styled from 'styled-components';

import { Paragraph } from '../common';

import notificationIcon from '../../assets/png/notification.png';
import defaultUserIcon from '../../assets/png/user.png';
import settingsIcon from '../../assets/png/settings.png';
import rightArrow from '../../assets/png/right-arrow.png';
import invoice from '../../assets/png/invoice.png';

const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-top: 40;
    padding-left: 20;
    padding-right: 20;
    height: auto;
    padding-bottom: 20;
`;

const Button = styled(TouchableHighlight)`
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    border-color: linear-gradient(
        to right,
        rgba(234, 231, 239, 1.00),
        rgba(22, 57, 176, 1.00),
        rgba(234, 231, 239, 1.00)
    );
    border-width: 0;
    border-top-width: 1;
    width: 100%;
`;

const ButtonContent = styled.View`
    flex-direction: row;
    align-items: center;
    padding-top: 20;
    padding-bottom: 20;
    padding-left: 20;
    padding-right: 20;
    justify-content: space-between;
    width: 100%;
`;

class HomePage extends Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View style={{ backgroundColor: '#0052AA', paddingBottom: 20 }}>
                        <Header>
                            <Image
                                style={{ width: 24, height: 24 }}
                                source={notificationIcon}
                            />
                            <Image
                                style={{ width: 48, height: 48 }}
                                source={defaultUserIcon}
                            />
                            <Image
                                style={{ width: 24, height: 24 }}
                                source={settingsIcon}
                            />
                        </Header>
                        <View>
                            <Button
                                onPress={() =>
                                    console.log('Hello')
                                }
                                color="#fff"
                            >
                                <ButtonContent>
                                    <Text style={{ fontSize: 18, color: '#fff' }} >Manage all</Text>
                                    <Image
                                        style={{ width: 18, height: 18 }}
                                        source={rightArrow}
                                    />
                                </ButtonContent>
                            </Button>
                            <Button
                                onPress={() =>
                                    console.log('Hello')
                                }
                                color="#fff"
                            >
                                <ButtonContent>
                                    <Text style={{ fontSize: 18, color: '#fff' }} >See activity</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 18, color: '#fff', marginRight: 8 }}>
                                            View all
                                        </Text>
                                        <Image
                                            style={{ width: 18, height: 18 }}
                                            source={rightArrow}
                                        />
                                    </View>
                                </ButtonContent>
                            </Button>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                style={{ width: 72, height: 80, marginTop: 20 }}
                                source={invoice}
                            />
                            <Paragraph style={{ color: '#fff' }}>
                                All your transactions are saved here.
                            </Paragraph>
                            <Paragraph style={{ color: '#fff', marginTop: 4 }}>
                                Quickly find what you need when you need it.
                            </Paragraph>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#00887E', height: 300 }}>
                        <Text>
                            Hello
                        </Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default HomePage;

