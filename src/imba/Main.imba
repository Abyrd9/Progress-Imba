import {Page} from './Page'

var store = {
	goals: {
		type: 'goal'
		creator: {
			ghost: null,
			value: '',
			hasText: false,
			height: 48
		}
		items: []
	},
	subgoals: {
		hasBackButton: true,
		type: 'subgoal'
		creator: {
			ghost: null,
			value: '',
			hasText: false,
			height: 48
		}
		items: []
	},
	tasks: {
		hasBackButton: true,
		type: 'task'
		creator: {
			ghost: null,
			value: '',
			hasText: false,
			height: 48
		}
		items: []
	}
}

export tag Main

	def render
		<self>
			<Page[store:goals] subitems=store:subgoals:items route='/'>
			<Page[store:subgoals] subitems=store:tasks:items route='/goal/:key'>
			<Page[store:tasks] route='/subgoal/:key'>