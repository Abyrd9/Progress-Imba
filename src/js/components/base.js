import React, {Component} from 'react';

import GlobalContainer from './styled/GlobalContainer';
import Goal from './common/Goal/Goal';
import {
	GoalBlock,
	GoalWrapper
} from './styled/blocks/Goals';
import {
	SubgoalBlock,
	SubgoalWrapper,
} from './styled/blocks/Subgoals';
import {
	TaskBlock,
	TaskWrapper,
} from './styled/blocks/Tasks';

class Base extends Component {
	render() {
		return (
			<GlobalContainer>
				<GoalBlock>
					<GoalWrapper>
						<Goal />
					</GoalWrapper>
					<GoalBlock.Creator />
				</GoalBlock>
			</GlobalContainer>
		)
	}
}

export default Base;