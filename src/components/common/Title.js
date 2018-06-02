// @flow
import { Text } from 'react-native';
import styled from 'styled-components';

const Title = styled(Text)`
    font-size: ${props => (props.size ? props.size : '32px')};
    color: ${props => (props.color ? props.color : '#000')};
    marginTop: ${props => (props.marginTop ? props.marginTop : '0')}
    text-align: center;
    font-family: HKGrotesk-bold;
`;

export default Title;
