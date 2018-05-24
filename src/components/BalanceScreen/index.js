// @flow

import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import { Title, Paragraph } from '../common';

type Props = {};

const Container = styled.View`
    background-color: #0052AA;
    height: 100%;
    align-items: center;
    padding-left: 2%;
    padding-right: 2%;
`;

const BalanceView = styled.View`
    margin-top: 80;
    padding-bottom: 40;
    margin-bottom: 40;
    border-width: 0;
    border-bottom-width: 1;
    border-color: #C0C1C4;
    width: 92%;
`;

class BalanceScreen extends React.Component<Props> {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <Container>
                <BalanceView>
                    <Title size="48" color="#fff">$ 0.00</Title>
                    <Paragraph color="#fff">Available</Paragraph>
                </BalanceView>

                <View>
                    <Paragraph size="24" lineHeight="24" color="#fff">
                        {'You don\'t need a balance to use Paypal'}
                    </Paragraph>
                    <Paragraph color="#fff">
                        When you have a balance, it will be{' '}
                        auto-withdrawn to your bank account on a daily basis.
                    </Paragraph>
                </View>
            </Container>
        );
    }
}

export default BalanceScreen;
