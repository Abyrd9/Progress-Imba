import styled from 'styled-components';
import { Colors, Shadow, Device } from './Mixins';

export default styled.div`
    ${Shadow(2)}
    background-color: ${Colors.Tan};
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${Device.Laptop} {
        max-width: 80%;
    }
`;