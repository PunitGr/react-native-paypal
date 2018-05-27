// @flow
import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableHighlight } from 'react-native';
import styled from 'styled-components';

import { Title, Paragraph } from '../common';

import notificationIcon from '../../assets/png/notification.png';
import defaultUserIcon from '../../assets/png/user.png';
import settingsIcon from '../../assets/png/settings.png';
import rightArrow from '../../assets/png/right-arrow.png';
import invoice from '../../assets/png/invoice.png';
import noteUp from '../../assets/png/note-up.png';
import noteDown from '../../assets/png/note-down.png';
import tag from '../../assets/png/tag.png';

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

const IconWrapper = styled.View`
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    shadow-offset: 0px 0px;
    shadow-opacity: 0.2;
    shadow-radius: 5px;
    shadow-color:
        ${props => (props.shadowColor ? props.shadowColor : '#00887E')};
    background-color:
        ${props => (props.backgroundColor ? props.backgroundColor : '#006170')};
    border-radius: 50%;
`;

type Props = {
    navigation: {
        navigate: Function,
    },
};

class HomePage extends Component<Props> {
    static navigationOptions = {
        header: null,
    };


    render() {
        const { navigate } = this.props.navigation;

        const SendAndRequest = () => (
            <View style={{ backgroundColor: '#00887E', paddingTop: 20 }}>
                <Title size={15} color="#fff">
                    SEND AND REQUEST
                </Title>
                <View
                    style={{
                        flexDirection: 'row',
                        flex: 1,
                        marginBottom: 30,
                        marginTop: 30,
                        alignItems: 'center',
                        justifyContent: 'space-around',
                    }}
                >
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <IconWrapper>
                            <Image
                                style={{ width: 40, height: 40 }}
                                source={noteUp}
                            />
                        </IconWrapper>
                        <Paragraph color="#fff">Send Payments</Paragraph>
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <IconWrapper>
                            <Image
                                style={{ width: 40, height: 40 }}
                                source={noteDown}
                            />
                        </IconWrapper>
                        <Paragraph color="#fff">Request Payments</Paragraph>
                    </View>
                </View>
            </View>
        );

        const Offer = () => (
            <View style={{
                backgroundColor: '#CDD6DA',
                paddingTop: 20,
                paddingBottom: 32,
                alignItems: 'center',
                }}
            >
                <Title size={14}>
                    MORE
                </Title>
                <IconWrapper
                    shadowColor="#CDD6DA"
                    backgroundColor="#fff"
                    style={{ marginTop: 30 }}
                >
                    <Image
                        style={{ width: 40, height: 40 }}
                        source={tag}
                    />
                </IconWrapper>
                <Paragraph>Offers</Paragraph>
            </View>
        );

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
                                    navigate('BalanceScreen')
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
                                    navigate('BalanceScreen')
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
                            <Paragraph color="#fff">
                                All your transactions are saved here.
                            </Paragraph>
                            <Paragraph color="#fff" style={{ marginTop: 4 }}>
                                Quickly find what you need when you need it.
                            </Paragraph>
                        </View>
                    </View>
                    <SendAndRequest />
                    <Offer />
                </View>
            </ScrollView>
        );
    }
}

export default HomePage;

