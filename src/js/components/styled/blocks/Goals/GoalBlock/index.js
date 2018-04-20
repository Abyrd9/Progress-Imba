import styled from 'styled-components';
import { Colors, Shadow, Device } from '../../../Mixins';

import Creator from './Creator';

const GoalBlock = styled.div`
		/* Styles */
    ${Shadow(2)}
    background-color: ${Colors.White};
    padding: 20px;

		/* Positioning */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
		
		/* Device Sizes */
    @media ${Device.Laptop} {
        max-width: 80%;
    }
`;

GoalBlock.Creator = Creator;

export default GoalBlock;