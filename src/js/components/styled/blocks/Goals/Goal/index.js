import styled from 'styled-components';
import { Colors, Shadow, Device } from '../../../Mixins';

import Input from './Input';
import Check from './Check';
import Chevron from './Chevron';
import Hamburger from './Hamburger';

const Goal = styled.div`
		/* Styles */
		width: 100%;
		box-sizing: border-box;
		border-bottom: 3px ${Colors.White} solid;
		padding-bottom: 5px;

		/* Positioning */
    display: grid;
    grid-template-columns: 35px auto 45px 45px;

		/* Device Sizes */
    @media ${Device.Laptop} {
    }
`;

Goal.Input = Input;
Goal.Check = Check;
Goal.Chevron = Chevron;
Goal.Hamburger = Hamburger;

export default Goal;