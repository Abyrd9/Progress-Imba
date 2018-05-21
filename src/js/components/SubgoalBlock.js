import React, {Component} from 'react';

import Block from './common/Block';
import ItemCreator from './common/ItemCreator';
import Container from './common/Container';
import Item from './common/Item';

class SubgoalBlock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			creatorValue: '',
			activeSubgoals: [],
			completedSubgoals: [],
		}
	}

	render() {
		const {
			activeSubgoals,
			completedSubgoals,
			creatorValue
		} = this.state;
		const {
			type,
			value,
			goalkey,
			isOpen,
			isComplete,
			subgoals,
		} = this.props;

		const cleanUpText = e => {
			const newText = e.target.value.replace(/\n/g, '');
			this.setState({ creatorValue: newText })
		}

		const createSubgoal = e => {
			if (e.key === 'Enter') {
				const value = e.target.value;
				const uniqueKey = KeyGen('subgoal', this.state.activeSubgoals);
				const subgoal = ItemObjectCreator('subgoal', value, goalkey, uniqueKey);
				this.setState(
					produce(draft => {
						draft.activeSubgoals.push(subgoal);
						draft.creatorValue = '';
					})
				)
			}
		}

		return (
			<Block type="subgoal">
				<Container type="subgoal">
					<Item
							type={type}
							value={value}
							isOpen={isOpen}
							isComplete={isComplete}
					/>
					{
						activeSubgoals.length > 0 && activeSubgoals.map(goal => {
							return (
								<div></div>
							)
						})
					}
				</Container>
				<ItemCreator
					placeholder="Create a subgoal..."
					type="subgoal"
					value={creatorValue}
					onChange={e => cleanUpText(e)}
					defaultHeight={60}
				/>
			</Block>
		)
	}
}

export default SubgoalBlock;