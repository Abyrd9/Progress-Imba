import React, {Component} from 'react';

import { Goal } from '../../styled/blocks/Goals';

class GoalItem extends Component {
	render() {
		const {
			inputValue,
			onInputChange,
			onCheckClick,
			onChevronClick
		} = this.props;
		return (
			<Goal>
				<Goal.Hamburger />
				<Goal.Input
					value={inputValue}
					onChange={onInputChange}
				/>
				<Goal.Check onClick={onCheckClick} />
				<Goal.Chevron onClick={onChevronClick} />
			</Goal>
		)
	}
}

export default GoalItem;