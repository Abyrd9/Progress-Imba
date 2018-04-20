import styled from 'styled-components';
import { Colors, Shadow, Device, Font, FontSize } from '../../Mixins';

const Creator = styled.input`
    /* style reset */
    background-color: transparent;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    outline: none;

		/* Styles */
		width: 100%;
		box-sizing: border-box;
		padding: 13px 18px;
		border: dashed 5px ${Colors.PurpleDark};
		margin-top: 20px;

		/* Font */
		${Font}
		${FontSize('subgoal')}
		text-transform: uppercase;
		color: ${Colors.PurpleDark};

		/* placeholder */
		&:placeholder {
			/* Font */
			${Font}
			${FontSize('subgoal')}
			text-transform: uppercase;
			color: ${Colors.PurpleDark};
		}

		/* Device Sizes */
    @media ${Device.Laptop} {
    }
`;

export default Creator;