// @flow
import React, { Component } from 'react';
import { View, Button } from 'react-native';
import styled from 'styled-components';

import { Input, Title, Paragraph } from '../common';
import paypalIcon from '../../assets/png/paypal-icon.png';

const PaypalIcon = styled.Image`
    width: 120;
    height: 120;
`;

const Next = styled(Button)`
    font-size: 40px;
    line-height: 24px;
`;

const RoundButtonContainer = styled.View`
    align-self: center;
    height: 54px;
    width: 240px;
    background-color: #169BD7;
    padding: 8px;
    marginTop: 24px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`;

type Props = {
    navigation: Object,
};

type State = {
    contact: string,
    onContactInputFocus: string,
};


class ForgotPassword extends Component<State, Props> {
    static navigationOptions = {
        header: null,
    };

    constructor(props: Props) {
        super(props);
        this.state = {
            contact: '',
            onContactInputFocus: '',
        };
    }

    state: State;

    render() {
        const { navigate, state: navigationProp } = this.props.navigation;
        const { contact } = navigationProp.params;
        return (
            <View style={{ flex: 1, height: '100%' }}>
                <View style={{ marginTop: 24, alignItems: 'center' }}>
                    <PaypalIcon
                        source={paypalIcon}
                    />
                </View>
                <View style={{ paddingTop: 20, padding: 30 }}>
                    <Title>
                        Need help with your password?
                    </Title>
                    <Paragraph>
                        Enter the {contact === 'email' ? 'email ' : 'phone number '}
                        you use for PayPal, and we{'\''}ll help you create a new password.
                    </Paragraph>
                    <Input
                        style={{
                            borderColor: this.state.onContactInputFocus ? '#169BD7' : '#C3C8CC',
                        }}
                        placeholder={contact === 'email' ? 'Email' : 'Phone number'}
                        placeholderTextColor="#C3C8CC"
                        onChangeText={val => this.setState({ contact: val })}
                        onFocus={() => this.setState({ onContactInputFocus: true })}
                        onBlur={() => this.setState({ onContactInputFocus: false })}
                        type={contact === 'email' ? 'email' : 'number'}
                        round
                    />
                    <RoundButtonContainer>
                        <Next
                            onPress={() =>
                                navigate('Home')
                            }
                            title="Next"
                            color="#fff"
                        />
                    </RoundButtonContainer>
                    {
                        contact === 'email' &&
                        <View style={{ marginTop: 16 }}>
                            <Button
                                onPress={() =>
                                    navigate('Home')
                                }
                                style={{ color: '#169BD7' }}
                                title="Forgot your email?"
                            />
                        </View>
                    }
                </View>
            </View>
        );
    }
}

export default ForgotPassword;

