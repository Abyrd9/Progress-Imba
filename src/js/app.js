import React, { Component } from "react";
import Base from "./components/base";

import GoalBlock from './components/styled/blocks/GoalBlock';
import GoalWrapper from './components/styled/blocks/GoalWrapper';
import Goal from './components/styled/blocks/GoalItem';
import SubgoalBlock from './components/styled/blocks/SubgoalBlock';
import SubgoalWrapper from './components/styled/blocks/SubgoalWrapper';
import Subgoal from './components/styled/blocks/Subgoal';
import TaskBlock from './components/styled/blocks/TaskBlock';
import TaskWrapper from './components/styled/blocks/TaskWrapper';
import Task from './components/styled/blocks/Task';


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