import React, {Component} from 'react';

import { Task } from '../../styled/blocks/Tasks';

class TaskItem extends Component {
	render() {
		const {
			inputValue,
			onInputChange,
			onCheckClick,
			onChevronClick
		} = this.props;
		return (
			<Task>
				<Task.Hamburger />
				<Task.Input
					value={inputValue}
					onChange={onInputChange}
				/>
				<Task.Check onClick={onCheckClick} />
				<Task.Chevron onClick={onChevronClick} />
			</Task>
		)
	}
}

export default TaskItem;