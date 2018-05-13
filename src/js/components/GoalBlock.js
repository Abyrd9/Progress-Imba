import React, {Component} from 'react';

import Block from './common/Block';
import ItemCreator from './common/ItemCreator';
import Container from './common/Container';
import Item from './common/Item';

class GoalBlock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			creatorValue: '',
			activeGoals: [],
			completedGoals: [],
		}
	}

	render() {
		const cleanUpText = e => {
			const newText = e.target.value.replace(/\n/g, '');
			this.setState({ creatorValue: newText })
		}

		return (
			<Block type="goal">
				<Container type="goal">
					<Item type="goal"/>
				</Container>
				<ItemCreator
					placeholder="Create a goal..."
					type="goal"
					value={this.state.creatorValue}
					onChange={e => cleanUpText(e)}
				/>
			</Block>
		)
	}
}

export default GoalBlock;