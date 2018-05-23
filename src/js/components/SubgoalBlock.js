import React, {Component} from 'react';

import Block from './common/Block';
import ItemCreator from './common/ItemCreator';
import Container from './common/Container';
import Item from './common/Item';
import PopUp from './common/PopUp';

import { GoalContext } from './theme/GoalTheme';

class SubgoalBlock extends Component {
	render() {
		const {
			type,
			value,
			goalkey,
			isOpen,
			isComplete,
			modalVisible,
		} = this.props;

		return (
			<Block type="subgoal">
				<Container type="subgoal">
					<GoalContext.Consumer>
						{
							context => (
								<React.Fragment>
									{modalVisible && (
										<PopUp
											alert="Are you sure you want to delete this goal?"
											yesClick={() => context.goalChange('delete', null, goalkey)}
											noClick={() => context.goalChange('modalVisible', false, goalkey)}
										/>
									)}
									<Item
											goalkey={goalkey}
											type={type}
											value={value}
											isOpen={isOpen}
											isComplete={isComplete}
											onChange={context.goalChange}
									/>
								</React.Fragment>
							)
						}
					</GoalContext.Consumer>
				</Container>
				<ItemCreator
					placeholder="Create a subgoal..."
					type="subgoal"
					// value={creatorValue}
					// onChange={e => cleanUpText(e)}
					defaultHeight={60}
				/>
			</Block>
		)
	}
}

export default SubgoalBlock;