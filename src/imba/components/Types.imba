import {KeyGen} from '../utils/KeyGen'

export tag Goal
	prop item
	prop subitems
	var type = 'goal'

	def addItem
		let newKey = KeyGen(data:items)
		let newItem = {
			key: newKey,
			value: data:creator:value,
			completed: false,
			childrenCompleted: false
		}
		let newSubItem = {
			parentkey: newKey,
			items: []
		} 
		data:items.unshift(newItem)
		subitems.unshift(newSubItem)
		item:creator:value = ''
		item:creator:hasText = false
		item:creator:height = 48
		self
		
	def render
		<self>

export tag Subgoal
	prop parentItem
	prop item
	prop subitems
	var type = 'subgoal'

	def addItem
		for item in item:items when item:parentkey == params:key
		var newKey = KeyGen(item:items)
		var newItem = {
			key: newKey,
			value: data:creator:value,
			completed: false,
			childrenCompleted: false,
		}
		var newSubItem = {
			parentkey: newKey,
			items: []
		}
		item:items.unshift(newItem)
		subitems.unshift(newSubItem)
		item:creator:value = ''
		item:creator:hasText = false
		item:creator:height = 48
	
	def render
		<self>

export tag Task
	prop parentItem
	prop item
	prop subitems
	var type = 'task'

	def addItem
		for item in item:items when item:parentkey == params:key
		var newKey = KeyGen(item:items)
		var newItem = {
			key: newKey,
			value: data:creator:value,
			completed: false,
			childrenCompleted: false,
		}
		item:items.unshift(newItem)
		item:creator:value = ''
		item:creator:hasText = false
		item:creator:height = 48

	def render
		<self>