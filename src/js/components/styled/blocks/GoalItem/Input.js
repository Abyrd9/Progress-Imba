import styled from 'styled-components';
import { Colors, Shadow, Device, Font, FontSize } from '../../Mixins';

const Input = styled.input`
    /* style reset */
    background-color: transparent;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    outline: none;

		/* Font */
		${Font}
		${FontSize('goal')}
		text-transform: uppercase;
		color: ${Colors.White};

		/* placeholder */
		&:placeholder {
			/* Font */
			${Font}
			${FontSize('goal')}
			text-transform: uppercase;
			color: ${Colors.White};
		}

		/* Device Sizes */
    @media ${Device.Laptop} {
			
    }
`;

export default Input;