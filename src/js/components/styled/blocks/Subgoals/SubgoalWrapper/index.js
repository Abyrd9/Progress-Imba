import styled from 'styled-components';
import { Colors, Shadow, Device } from '../../../Mixins';

const SubgoalWrapper = styled.div`
		/* Styles */
		${Shadow(2)}
    background-color: ${Colors.White};
		width: 100%;
		padding: 20px;
		box-sizing: border-box;
		margin-top: 10px;
		
		/* Positioning */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
		
		/* Device Sizes */
    @media ${Device.Laptop} {
    }
`;

export default SubgoalWrapper;