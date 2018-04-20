import styled from 'styled-components';
import { Colors, Shadow, Device } from '../../../Mixins';

import Input from './Input';
import Check from './Check';
import Chevron from './Chevron';
import Hamburger from './Hamburger';

const Subgoal = styled.div`
		/* Styles */
		width: 100%;
		box-sizing: border-box;
		border-bottom: 3px ${Colors.Blue} solid;
		padding-bottom: 5px;

		/* Positioning */
    display: grid;
    grid-template-columns: 30px auto 35px 35px;

		/* Device Sizes */
    @media ${Device.Laptop} {
    }
`;

Subgoal.Input = Input;
Subgoal.Check = Check;
Subgoal.Chevron = Chevron;
Subgoal.Hamburger = Hamburger;

export default Subgoal;