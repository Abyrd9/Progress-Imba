import React from 'react';
import styled from 'styled-components';
import { Colors, Shadow, Device, Font, FontSize } from '../../Mixins';

const ChevronIcon = ({ className }) => {
	return <i className={`fas fa-chevron-down ${className}`}></i>
}

const ChevronIconStyled = styled(ChevronIcon)`
		/* styles */
    align-self: center;
    border-radius: 100%;
		font-size: 16px;
    padding: 6px 7px;
    color: ${Colors.Purple};
    background-color: ${Colors.White};
    border: solid 2px ${Colors.White};
    transition: all .2s ease;

		/* Device Sizes */
    @media ${Device.Laptop} {
			
    }
`;

const ChevronContainer = styled.span`
		/* Positioning */
		align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Chevron = props => {
	return (
		<ChevronContainer
			onClick={props.onClick}
		>
			<ChevronIconStyled />
		</ChevronContainer>
	)
}

export default Chevron;