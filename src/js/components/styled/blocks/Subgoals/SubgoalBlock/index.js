import styled from 'styled-components';
import { Colors, Device } from '../../../Mixins';

import Creator from './Creator';

const SubgoalBlock = styled.div`
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

SubgoalBlock.Creator = Creator;

export default SubgoalBlock;