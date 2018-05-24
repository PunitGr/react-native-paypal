// @flow
import { Text } from 'react-native';
import styled from 'styled-components';

const Paragraph = styled(Text)`
    font-size: ${props => (props.size ? props.size : 16)};
    line-height: ${props => (props.lineHeight ? props.lineHeight : 16)};
    color: ${props => (props.color ? props.color : '#000')};;
    text-align: center;
    margin-top: 20;
`;

export default Paragraph;
