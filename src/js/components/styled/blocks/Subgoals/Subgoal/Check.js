import React from 'react';
import styled from 'styled-components';
import { Colors, Shadow, Device, Font, FontSize } from '../../../Mixins';

const CheckIcon = ({ className }) => {
	return <i className={`fas fa-check ${className}`}></i>
}

const CheckIconStyled = styled(CheckIcon)`
		/* styles */
    align-self: center;
    border-radius: 100%;
		font-size: 12px;
    padding: 6px;
    color: ${Colors.White};
    background-color: ${Colors.Blue};
    border: solid 2px ${Colors.Blue};
    transition: all .2s ease;

		/* Device Sizes */
    @media ${Device.Laptop} {
			
    }
`;

const CheckContainer = styled.span`
		/* Positioning */
		align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Check = props => {
	return (
		<CheckContainer
			onClick={props.onClick}
		>
			<CheckIconStyled />
		</CheckContainer>
	)
}

export default Check;