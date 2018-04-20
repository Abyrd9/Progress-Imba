import React, {Component} from 'react';

import { Subgoal } from '../../styled/blocks/Subgoals';

class SubgoalItem extends Component {
	render() {
		const {
			inputValue,
			onInputChange,
			onCheckClick,
			onChevronClick
		} = this.props;
		return (
			<Subgoal>
				<Subgoal.Hamburger />
				<Subgoal.Input
					value={inputValue}
					onChange={onInputChange}
				/>
				<Subgoal.Check onClick={onCheckClick} />
				<Subgoal.Chevron onClick={onChevronClick} />
			</Subgoal>
		)
	}
}

export default SubgoalItem;