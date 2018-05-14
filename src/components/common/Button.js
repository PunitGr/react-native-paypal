import { Button } from 'react-native';
import styled from 'styled-components';

const StyledButton = styled.Button`
    font-size: ${props => (props.fontSize ? props.fontSize : '40')} !important;
    line-height: 24 !important;
    color: #fff !important;
`;

export default StyledButton;
