import styled from 'styled-components';
import { Colors, Device } from '../../Mixins';

import Creator from './Creator';

const TaskBlock = styled.div`
		/* Styles */
		width: 100%;
		box-sizing: border-box;

		/* Positioning */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
		
		/* Device Sizes */
    @media ${Device.Laptop} {
    }
`;

TaskBlock.Creator = Creator;

export default TaskBlock;