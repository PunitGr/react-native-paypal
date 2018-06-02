// @flow
import { Button } from 'react-native';
import styled from 'styled-components';

const StyledButton = styled(Button)`
    font-size: ${props => (props.fontSize ? props.fontSize : '40px')};
    line-height: 24px;
    color: #fff;
    font-family: HKGrotesk-regular;
`;

export default StyledButton;
