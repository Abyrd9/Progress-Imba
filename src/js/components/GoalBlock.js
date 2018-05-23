import React, {Component} from 'react';

import produce from 'immer';
import { KeyGen } from '../util/KeyGen';
import { ItemObjectCreator } from '../util/ItemObjectCreator';

import { GoalProvider, GoalContext } from './theme/GoalTheme';

import Block from './common/Block';
import ItemCreator from './common/ItemCreator';
import Container from './common/Container';
import SubgoalBlock from './SubgoalBlock';

class GoalBlock extends Component {
	render() {
		return (
			<GoalProvider>
				<Block type="goal">
					<Container type="goal">
						<GoalContext.Consumer>
							{
								context => {
									const { activeGoals } = context;
									activeGoals.length > 0 && activeGoals.map(goal => {
										return (
											<SubgoalBlock
												type="goal"
												value={goal.value}
												key={goal.key}
												goalkey={goal.key}
												isOpen={goal.isOpen}
												isComplete={goal.isComplete}
												modalVisible={goal.modalVisible}
												goalChange={goalChange}
											/>
										)
									})
								}
							}
						</GoalContext.Consumer>
					</Container>
					<GoalContext.Consumer>
						{
							context => (
								<ItemCreator
									placeholder="Create a goal..."
									type="goal"
									value={context.creatorValue}
									onChange={e => context.cleanUpText(e)}
									onKeyPress={e => context.createGoal(e)}
									defaultHeight={72}
								/>
							) 
						}
					</GoalContext.Consumer>
				</Block>
			</GoalProvider>
		)
	}
}

export default GoalBlock;