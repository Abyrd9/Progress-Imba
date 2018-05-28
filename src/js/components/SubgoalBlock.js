import React, {Component} from 'react';

import Block from './common/Block';
import ItemCreator from './common/ItemCreator';
import Container from './common/Container';
import Item from './common/Item';
import PopUp from './common/PopUp';

import { GoalContext } from './theme/GoalTheme';
import Dropdown from '../util/Dropdown';

class SubgoalBlock extends Component {
	render() {
		const {
			type,
			value,
			goalkey,
			isOpen,
			isComplete,
			modalVisible,
			transitionActive,
		} = this.props;

		return (
			<Block type="subgoal" isComplete={isComplete}>
				<Container type="subgoal">
					<GoalContext.Consumer>
						{
							context => (
								<React.Fragment>
									{modalVisible && (
										<PopUp
											type="goal"
											position="left"
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
											transitionActive={transitionActive}
									/>
									<Dropdown
										goalkey={goalkey}
										defaultHeight={66}
										isOpen={isOpen}
										transitionToggle={context.goalChange}
									>
										<div style={{ height: '500px', width: '100%', backgroundColor: 'blue' }}></div>
									</Dropdown>
								</React.Fragment>
							)
						}
					</GoalContext.Consumer>
				</Container>
				{!isComplete && (
					<ItemCreator
						placeholder="Create a subgoal..."
						type="subgoal"
						// value={creatorValue}
						// onChange={e => cleanUpText(e)}
						defaultHeight={60}
					/>
				)}
			</Block>
		)
	}
}

export default SubgoalBlock;