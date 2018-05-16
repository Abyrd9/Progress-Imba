import React, {Component} from 'react';

import produce from 'immer';
import { KeyGen } from '../util/KeyGen';
import { ItemObjectCreator } from '../util/ItemObjectCreator';

import Block from './common/Block';
import ItemCreator from './common/ItemCreator';
import Container from './common/Container';
import SubgoalBlock from './SubgoalBlock';

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
		const {activeGoals, completedGoals, creatorValue} = this.state;

		const cleanUpText = e => {
			const newText = e.target.value.replace(/\n/g, '');
			this.setState({ creatorValue: newText })
		}

		const createGoal = e => {
			if (e.key === 'Enter') {
				const value = e.target.value;
				const uniqueKey = KeyGen('goal', this.state.activeGoals);
				const goal = ItemObjectCreator('goal', value, uniqueKey);
				this.setState(
					produce(draft => {
						draft.activeGoals.push(goal);
						draft.creatorValue = '';
					})
				)
			}
		}

		return (
			<Block type="goal">
				<Container type="goal">
					{
						activeGoals.length > 0 && activeGoals.map(goal => {
							return (
								<SubgoalBlock
									type="goal"
									value={goal.value}
									key={goal.key}
									goalkey={goal.key}
									isOpen={goal.isOpen}
									isComplete={goal.isComplete}
								/>
							)
						})
					}
				</Container>
				<ItemCreator
					placeholder="Create a goal..."
					type="goal"
					value={creatorValue}
					onChange={e => cleanUpText(e)}
					onKeyPress={e => createGoal(e)}
					defaultHeight={72}
				/>
			</Block>
		)
	}
}

export default GoalBlock;