import '../../style.scss'
import {KeyGen} from '../utils/KeyGen'

export tag Creator
	prop subitems default: []
	prop paramkey

	def mount
		data:creator:ghost = @dom:getElementsByClassName('autosize-container__ghost')[0]

	def addElement e
		# Create new item
		if data:type == 'goal'
			var newKey = KeyGen(data:items)
			var newItem = {
				key: newKey,
				value: data:creator:value,
				completed: false,
				childrenCompleted: false
			}
			var newSubItem = {
				parentkey: newKey,
				items: []
			}
			data:items.unshift(newItem)
			subitems.unshift(newSubItem)
		else if data:type == 'subgoal'
			for item in data:items when item:parentkey == paramkey
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
		else if data:type == 'task'
			for item in data:items when item:parentkey == paramkey
				var newKey = KeyGen(item:items)
				var newItem = {
					key: newKey,
					value: data:creator:value,
					completed: false,
					childrenCompleted: false,
				}
				item:items.unshift(newItem)
		# Reset Creator Values
		data:creator:value = ''
		data:creator:hasText = false
		data:creator:height = 48

	def autoSize
		var elementHeight = data:creator:ghost:clientHeight
		if elementHeight >= 48
			data:creator:height = elementHeight

	def valueChange event
		if event.target.value != ''
			data:creator:hasText = true;
			data:creator:value = event.target.value
			autoSize(event.native:srcElement:nextSibling)
		else
			data:creator:hasText = false;
			data:creator:value = event.target.value

	def render
		<self.creator>
			<form.creator__form :submit.prevent.addElement>
				<div.autosize-container>
					<textarea
						[data:creator:value]
						:keyup.valueChange
						:input.valueChange
						.autosize-container__input .creator__input
						css:height=data:creator:height
					>
					<div.autosize-container__ghost .creator__input> "{data:creator:value}"
				<p.creator__placeholder .visible=!data:creator:hasText> "create new {data:type}..."
				<button.creator__button .{"creator__button-" + data:type} disabled=!data:creator:hasText>
					<i.fas .fa-plus-circle .creator__button__icon>