import styled from 'styled-components';
import { Colors, Shadow, Device, Font, FontSize } from '../../../Mixins';

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
		padding: 10px 15px;
		border-bottom: solid 3px ${Colors.Tan};

		/* Font */
		${Font}
		${FontSize('task')}
		text-transform: uppercase;
		color: ${Colors.Tan};

		/* placeholder */
		&:placeholder {
			/* Font */
			${Font}
			${FontSize('task')}
			text-transform: uppercase;
			color: ${Colors.Tan};
		}

		/* Device Sizes */
    @media ${Device.Laptop} {
    }
`;

export default Creator;