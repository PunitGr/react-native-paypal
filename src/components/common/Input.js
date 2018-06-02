// @flow
import { TextInput } from 'react-native';
import styled from 'styled-components';

const Input = styled(TextInput)`
    height: 40px;
    margin-top: 16px;
    font-size: 20px;
    border-radius: ${props => (props.round ? '4px' : 0)};
    border-width: ${props => (props.round ? '1px' : 0)};
    border-bottom-width: 1px;
    padding: 8px;
    border-color: #C3C8CC;
    font-family: HKGrotesk-regular;
`;

export default Input;
