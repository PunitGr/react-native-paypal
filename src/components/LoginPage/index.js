import React, { Component } from 'react';
import { View, Button, Image } from 'react-native';

import styled from 'styled-components';

import { Input } from '../common';

const ButtonContainer = styled.View`
    bottom: 0;
    height: 80;
    background-color: ${props => (props.highlight ? '#169BD7' : '#C3C8CC')};
    padding: 20px;
`;

export default class LoginPage extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            contact: '',
            password: '',
            onContactInputFocus: false,
            onPasswordInputFocus: false,
            hasPhoneNumber: false,
        };
    }

    handleContactTypeSelection = () => {
        this.setState({
            hasPhoneNumber: !this.state.hasPhoneNumber
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        const { hasPhoneNumber } = this.state;
        return (
            <View style={{height: '100%', marginTop: 10}}>
                <View style={{marginTop: 24, alignItems: 'center'}}>
                    <Image
                        style={{ width: 120, height: 120 }}
                        source={require('../../assets/png/paypal-icon.png')}
                    />
                </View>
                <View style={{ padding: 30, height: '57%' }}>
                    <View style={{ width: '100%', flex: 1, justifyContent: 'center' }}>
                        <Input
                            style={{
                                borderColor: this.state.onContactInputFocus ? '#169BD7' : '#C3C8CC'
                            }}
                            placeholder={hasPhoneNumber ? 'Phone number' : 'Email'}
                            placeholderTextColor="#C3C8CC"
                            onChangeText={(contact) => this.setState({contact})}
                            onFocus={() => this.setState({ onContactInputFocus: true })}
                            onBlur={() => this.setState({ onContactInputFocus: false })}
                            type={hasPhoneNumber ? 'number' : 'email'}
                        />
                        <View style={{ flexDirection: 'row', marginTop: 20, width: "100%" }}>
                            <Input
                                style={{
                                    borderColor: this.state.onPasswordInputFocus ? '#169BD7' : '#C3C8CC',
                                    width: "75%"
                                }}
                                placeholder="Password"
                                placeholderTextColor="#C3C8CC"
                                onChangeText={(password) => this.setState({password})}
                                onFocus={() => this.setState({ onPasswordInputFocus: true })}
                                onBlur={() => this.setState({ onPasswordInputFocus: false })}
                                secureTextEntry={true}
                            />
                            <View style={{
                                    alignItems: 'flex-end',
                                    justifyContent:'center',
                                    borderBottomWidth: 1,
                                    borderColor: this.state.onPasswordInputFocus ? '#169BD7' : '#C3C8CC',
                                    width: "25%"
                                }}
                            >
                                <Button
                                    onPress={() =>
                                        navigate(
                                            'ForgotPassword',
                                            { contact: hasPhoneNumber ? 'phone' : 'email' }
                                        )
                                    }
                                    style={{ color: '#169BD7' }}
                                    title="Forgot?"
                                />
                            </View>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Button
                                onPress={this.handleContactTypeSelection}
                                style={{ color: '#169BD7' }}
                                title={!hasPhoneNumber ? 'Use phone number instead' : 'Use email instead'}
                            />
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{ top: 10, marginBottom: 20 }}>
                        <Button
                            onPress={() =>
                                navigate('Home')
                            }
                            style={{ color: '#169BD7' }}
                            title="New to PayPal? Sign up"
                        />
                    </View>
                    <ButtonContainer highlight={ this.state.contact && this.state.password }>
                        <Button
                            onPress={() =>
                                navigate('Home')
                            }
                            title="Log In"
                            color="#fff"
                            style={{  fontSize: 40, lineHeight: 24 }}
                        />
                    </ButtonContainer>
                </View>
            </View>
        );
    }
}
