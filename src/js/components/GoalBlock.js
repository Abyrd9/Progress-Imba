import React, {Component} from 'react';

import { GoalProvider, GoalContext } from './theme/GoalTheme';

import Block from './common/Block';
import ItemCreator from './common/ItemCreator';
import Container from './common/Container';
import SubgoalBlock from './SubgoalBlock';

import { SortableContainer, SortableElement } from 'react-sortable-hoc';

const SortableItem = SortableElement(({ goal }) => (
	<SubgoalBlock
		type="goal"
		value={goal.value}
		goalkey={goal.key}
		isOpen={goal.isOpen}
		isComplete={goal.isComplete}
		modalVisible={goal.modalVisible}
	/>
));

const SortableList = SortableContainer(({ goals }) => {
	return (
		<div>
			{
				goals.length > 0 && goals.map((goal, index) => {
					return (
						<SortableItem key={goal.key} index={index} goal={goal} />
					)
				})
			}
		</div>
	)
})

class GoalBlock extends Component {
	render() {
		return (
			<GoalProvider>
				<Block type="goal">
					<GoalContext.Consumer>
						{
							context => (
								<React.Fragment>
									<Container type="goal">
										<SortableList goals={context.activeGoals} onSortEnd={context.onSortEnd} useDragHandle={true} />
									</Container>
									<ItemCreator
										placeholder="Create a goal..."
										type="goal"
										value={context.creatorValue}
										onChange={e => context.cleanUpText(e)}
										onKeyPress={e => context.createGoal(e)}
										defaultHeight={72}
									/>
								</React.Fragment>
							)
						}
					</GoalContext.Consumer>
				</Block>
			</GoalProvider>
		)
	}
}

export default GoalBlock;