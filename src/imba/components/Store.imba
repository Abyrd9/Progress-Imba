export var store = {
	goals: {
		type: 'goal',
		subType: 'subgoals',
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
		type: 'subgoal',
		subType: 'tasks',
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
		type: 'task',
		subType: ''
		creator: {
			ghost: null,
			value: '',
			hasText: false,
			height: 48
		}
		items: []
	}
}