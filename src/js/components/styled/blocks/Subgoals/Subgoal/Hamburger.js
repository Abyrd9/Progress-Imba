import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../Mixins';

const HamburgerIcon = ({ className }) => {
	return (
		<i className={`fas fa-bars ${className}`}></i>
	)
}

const HamburgerIconStyled = styled(HamburgerIcon)`
		align-self: center;
		color: ${Colors.Blue};
		font-size: 20px;
		justify-self: left;
`;

const HamburgerContainer = styled.span`
		display: flex;
		align-items: center;
		justify-content: flex-start;
		&:hover {
				cursor: move;
		}
`;

// Icon Container

const Hamburger = () => {
	return (
		<HamburgerContainer>
			<HamburgerIconStyled/>
		</HamburgerContainer>
	)
}

export default Hamburger;




