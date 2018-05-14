// @flow
import { TextInput } from 'react-native';
import styled from 'styled-components';

const Input = styled(TextInput)`
    height: 40;
    margin-top: 16;
    font-size: 20;
    border-radius: ${props => (props.round ? 4 : 0)};
    border-width: ${props => (props.round ? 1 : 0)};
    border-bottom-width: 1;
    padding: 8px;
    border-color: #C3C8CC;
`;

export default Input;
