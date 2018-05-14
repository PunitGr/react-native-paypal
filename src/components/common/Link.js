import { Button } from 'react-native';
import styled from 'styled-components';

const Link = styled.Button`
    font-size: ${props => (props.fontSize ? props.fontSize : '24')};
    line-height: 24;
    color: #169BD7;
`;

export default Link;
