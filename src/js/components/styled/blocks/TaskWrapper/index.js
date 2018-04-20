import styled from 'styled-components';
import { Colors, Device } from '../../Mixins';

const SubgoalWrapper = styled.div`
		/* Styles */
		width: 100%;
		padding: 10px;
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