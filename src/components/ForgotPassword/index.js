import React, { Component } from 'react';
import { View, TextInput, Button, Image } from 'react-native';
import styled from 'styled-components';

import { Input, Title, Paragraph } from '../common';

const PaypalIcon = styled.Image`
    width: 120;
    height: 120;
`;

const styles = {
    button: {
        fontSize: 40,
        lineHeight: 24,
    },
    roundButton: {
        alignSelf: 'center',
        height: 54,
        width: 240,
        backgroundColor: '#169BD7',
        padding: 8,
        marginTop: 24,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
};


class ForgotPassword extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            contact: '',
            onContactInputFocus: '',
        };
    }

    render() {
        const { navigate, state: navigationProp } = this.props.navigation;
        const { contact } = navigationProp.params;
        return (
            <View style={{ flex: 1, height: '100%' }}>
                <View style={{ marginTop: 24, alignItems: 'center' }}>
                    <PaypalIcon
                        source={require('../../assets/png/paypal-icon.png')}
                    />
                </View>
                <View style={{ paddingTop: 20, padding: 30 }}>
                    <Title>
                        Need help with your password?
                    </Title>
                    <Paragraph>
                        Enter the {contact === 'email' ? 'email ' : 'phone number '}
                        you use for PayPal, and we'll help you create a new password.
                    </Paragraph>
                    <Input
                        style={{
                            borderColor: this.state.onContactInputFocus ? '#169BD7' : '#C3C8CC'
                        }}
                        placeholder={contact === 'email' ? 'Email' : 'Phone number'}
                        placeholderTextColor="#C3C8CC"
                        onChangeText={(contact) => this.setState({contact})}
                        onFocus={() => this.setState({ onContactInputFocus: true })}
                        onBlur={() => this.setState({ onContactInputFocus: false })}
                        type={contact === 'email' ? 'email' : 'number'}
                        round
                    />
                    <View style={{
                            ...styles.roundButton,
                        }}
                    >
                        <Button
                            onPress={() =>
                                navigate('Home')
                            }
                            title="Next"
                            color="#fff"
                            style={{  ...styles.button }}
                        />
                    </View>
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

