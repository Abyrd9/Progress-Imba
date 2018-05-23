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
						draft.activeGoals.push(goal);
						draft.creatorValue = '';
					})
				)
			}
		}

		const goalChange = (keyToChange, value, goalKey) => {
			this.setState(
				produce(draft => {
					draft.activeGoals.forEach((goal, index) => {
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
									draft.activeGoals.splice(index, 1);
									break;
								default:
									goal[keyToChange] = value;
							}
						}
					 });
				})
			)
		}

		const onSortEnd = ({oldIndex, newIndex}) => {
			this.setState(
				produce(draft => {
					draft.activeGoals = arrayMove(draft.activeGoals, oldIndex, newIndex)
				})
			)
		};

		return (
			<GoalContext.Provider value={{
				creatorValue: this.state.creatorValue,
				activeGoals: this.state.activeGoals,
				completedGoals: this.state.completedGoals,
				cleanUpText,
				createGoal,
				goalChange,
				onSortEnd
			}}>
				{this.props.children}
			</GoalContext.Provider>
		)
	}
}