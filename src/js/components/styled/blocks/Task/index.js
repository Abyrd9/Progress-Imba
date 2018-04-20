import styled from 'styled-components';
import { Colors, Shadow, Device } from '../../Mixins';

import Input from './Input';
import Check from './Check';
import Hamburger from './Hamburger';

const Task = styled.div`
		/* Styles */
		width: 100%;
		box-sizing: border-box;

		/* Positioning */
    display: grid;
    grid-template-columns: 40px auto 35px;

		/* Device Sizes */
    @media ${Device.Laptop} {
    }
`;

Task.Input = Input;
Task.Check = Check;
Task.Hamburger = Hamburger;

export default Task;