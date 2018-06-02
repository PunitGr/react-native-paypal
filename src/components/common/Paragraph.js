// @flow
import { Text } from 'react-native';
import styled from 'styled-components';

const Paragraph = styled(Text)`
    font-size: ${props => (props.size ? props.size : '16px')};
    line-height: ${props => (props.lineHeight ? props.lineHeight : '16px')};
    color: ${props => (props.color ? props.color : '#000')};;
    text-align: center;
    margin-top: ${props => (props.marginTop ? props.marginTop : '20px')}
    font-family: HKGrotesk-regular;
`;

export default Paragraph;
