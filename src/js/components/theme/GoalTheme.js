import React, { Component } from 'react';
import produce from 'immer';
import { arrayMove } from 'react-sortable-hoc';

import { KeyGen } from '../../util/KeyGen';
import { ItemObjectCreator } from '../../util/ItemObjectCreator';

export const GoalContext = React.createContext('goal')

export class GoalProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			creatorValue: '',
			currentTab: 'active',
			activeGoals: [],
			completedGoals: [],
		}
	}
	render() {

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
						draft.currentTab = 'active';
						draft.activeGoals.push(goal);
						draft.creatorValue = '';
					})
				)
			}
		}

		const toggleRender = (value) => {
			this.setState(
				produce(draft => {
					draft.currentTab = value;
				})
			)
		}

		const goalChange = (keyToChange, value, goalKey) => {
			const { currentTab } = this.state;
			const selectedList = currentTab === 'completed' ? 'completedGoals' : 'activeGoals';
			this.setState(
				produce(draft => {
					draft[selectedList].forEach((goal, index) => {
						if (goal.key === goalKey) {
							switch(keyToChange) {
								case 'value':
									const newText = value.replace(/\n/g, '');
									if (value === '') {
										goal.modalVisible = true;
									} else {
										goal[keyToChange] = newText;
									}
									break;
								case 'delete':
									draft[selectedList].splice(index, 1);
									break;
								case 'isComplete': {

									draft[selectedList].splice(index, 1);
									const otherList = selectedList === 'activeGoals' ? 'completedGoals' : 'activeGoals';
									goal.isComplete = value;
									draft[otherList].push(goal);
									break;
								}
								default:
									goal[keyToChange] = value;
							}
						}
					 });
				})
			)
		}

		const onSortEnd = ({oldIndex, newIndex}) => {
			const { currentTab } = this.state;
			const selectedList = currentTab === 'completed' ? 'completedGoals' : 'activeGoals';
			this.setState(
				produce(draft => {
					draft[selectedList] = arrayMove(draft[selectedList], oldIndex, newIndex)
				})
			)
		};

		return (
			<GoalContext.Provider value={{
				creatorValue: this.state.creatorValue,
				currentTab: this.state.currentTab,
				activeGoals: this.state.activeGoals,
				completedGoals: this.state.completedGoals,
				cleanUpText,
				createGoal,
				toggleRender,
				goalChange,
				onSortEnd
			}}>
				{this.props.children}
			</GoalContext.Provider>
		)
	}
}