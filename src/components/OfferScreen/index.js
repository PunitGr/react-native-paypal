import React from 'react';
import { View, Image } from 'react-native';

import { Title, Paragraph } from '../common';

import tag from '../../assets/png/tag.png';


const OfferScreen = () => (
    <View
        style={{
            height: '100%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 32,
            paddingRight: 32,
        }}
    >
        <Image style={{ width: 80, height: 80 }} source={tag} />
        <Title size="20px" marginTop="8px">
            {'You don\'t have any saved offers'}
        </Title>
        <Paragraph color="#777">
            {'This is where you\'ll see any offers you save.'}
        </Paragraph>
        <Paragraph marginTop="4px" color="#777">
            Offers are applied automatically when you pay with PayPal.
        </Paragraph>
    </View>
);

export default OfferScreen;
