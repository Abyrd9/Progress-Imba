import React, { Component } from "react";
import Base from "./components/base";

import {
	GoalBlock,
	GoalWrapper,
	Goal
} from './components/styled/blocks/Goals';
import {
	SubgoalBlock,
	SubgoalWrapper,
	Subgoal
} from './components/styled/blocks/Subgoals';
import {
	TaskBlock,
	TaskWrapper,
	Task
} from './components/styled/blocks/Tasks';

class App extends Component {
	render() {
		console.log(<GoalBlock />);
		return (
			<GoalBlock>
				<GoalWrapper>
					<Goal>
						<Goal.Hamburger />
						<Goal.Input />
						<Goal.Check />
						<Goal.Chevron />
					</Goal>
					<SubgoalBlock>
						<SubgoalWrapper>
							<Subgoal>
								<Subgoal.Hamburger />
								<Subgoal.Input />
								<Subgoal.Check />
								<Subgoal.Chevron />
							</Subgoal>
							<TaskBlock>
								<TaskWrapper>
									<Task>
										<Task.Check />
										<Task.Input />
										<Task.Hamburger />
									</Task>
								</TaskWrapper>
								<TaskBlock.Creator />
							</TaskBlock>
						</SubgoalWrapper>
						<SubgoalBlock.Creator />
					</SubgoalBlock>
				</GoalWrapper>
				<GoalBlock.Creator />
			</GoalBlock>
		);
	}
}

export default App;

{/* <GoalBlock>
				<GoalWrapper>
					<Goal>
						<Goal.Hamburger />
						<Goal.Input />
						<Goal.Check />
						<Goal.Chevron />
					</Goal>
					<SubgoalBlock>
						<SubgoalWrapper>
							<Subgoal>
								<Goal.Hamburger />
								<Goal.Input />
								<Goal.Check />
								<Goal.Chevron />
							</Subgoal>
							<TaskBlock>
								<TaskWrapper>
									<Task>
										<Goal.Hamburger />
										<Goal.Input />
										<Goal.Check />
										<Goal.Chevron />
									</Task>
								</TaskWrapper>
								<TaskBlock.Creator>
							</TaskBlock>
						</SubgoalWrapper>
						<SubgoalBlock.Creator />
					</SubgoalBlock>
				</GoalWrapper>
				<GoalBlock.Creator />
			</GoalBlock> */}