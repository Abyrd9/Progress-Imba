import {KeyGen} from '../utils/KeyGen'

export var store = {
	goals: {
		type: 'goal',
		subType: 'subgoal',
		parentType: ''
		hasBackButton: false,
		creator: {
			value: '',
		}
		items: []
	},
	subgoals: {
		type: 'subgoal',
		subType: 'task',
		parentType: 'goal',
		hasBackButton: true,
		creator: {
			value: '',
		}
		items: []
	},
	tasks: {
		type: 'task',
		subType: '',
		parentType: 'subgoal',
		hasBackButton: true,
		creator: {
			value: '',
		}
		items: [],
	}
}

export class ProgressStore
	def initialize
		@prevUrl = '/'
		@prevKey = ''

	#  GETTERS  #
	def getItemStore type
		return store["{type}s"]

	def getParamKey params
		if params:key
			return params:key

	def prevUrl
		@prevUrl

	def getItems type, paramkey
		if type != 'goal'
			for item in store["{type}s"]:items when item:parentKey == paramkey
				return item:items
		else
			return store["{type}s"]:items
	
	def getItem type, paramkey
		if type == 'subgoal'
			for item in store:goals:items when item:key == paramkey
				return item
		else
			let items
			for item in store:subgoals:items when item:parentKey == @prevKey
				items = item:items
			for item in items when item:key == paramkey
				return item

	#  SETTERS  #
	def setPrevUrl params, type
		if params && type == 'subgoal' && params:key
			if @prevUrl != params:url
				@prevUrl = params:url
				@prevKey = params:key

	# CUSTOM FUNCTIONALITY #
	def AddItem type, paramkey, itemStore, subItemsStore
		# create new key
		let newKey = ''
		if type == 'goal'
			newKey = KeyGen(itemStore:items)
		else
			for item in itemStore:items when item:parentKey == paramkey
				newKey = KeyGen(item:items)

		# create new item with new key
		let newItem = {
			type: type,
			key: newKey,
			value: itemStore:creator:value,
			completed: false,
			childrenCompleted: false,
			editValue: {
				value: itemStore:creator:value
			}
		}
		if type == 'goal'
			itemStore:items.unshift(newItem)
		else
			for item in itemStore:items when item:parentKey == paramkey
				item:items.unshift(newItem)

		# create new subitem if the item is a parent
		if itemStore:subType:length > 0
			let newSubItem = {
				parentKey: newKey,
				items: []
			}
			subItemsStore:items.unshift(newSubItem)

		# reset creator values
		itemStore:creator:value = ''

	def removeItem delItem
		if delItem:type == 'goal'
			console.log "this is running", delItem
			for item,i in store["{delItem:type}s"]:items when item:key == delItem:key
				console.log item, i, "delete this"
				store["{delItem:type}s"]:items.splice(i, 1)
		else
			let items
			for item in store["{delItem:type}s"]:items when item:parentKey == @prevKey
				items = item:items
			for item,i in items when item:key == delItem:key
				items.splice(i, 1)