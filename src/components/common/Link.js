// @flow
import { Button } from 'react-native';
import styled from 'styled-components';

const Link = styled(Button)`
    font-size: ${props => (props.fontSize ? props.fontSize : '24px')};
    line-height: 24px;
    color: #169BD7;
    font-family: HKGrotesk-regular;
`;

export default Link;
