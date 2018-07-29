import '../../style.scss'
import AutoSizeInput from './AutoSizeInput'

export tag Creator < form
	prop type
	prop paramkey

	def onsubmit e
		e.prevent
		let subType = data:getItemStore(type):subType
		data:AddItem(type, paramkey, data:getItemStore(type), data:getItemStore(subType))
		self

	def checkLength value
		return value:length > 0

	def render
		<self.creator>
			<AutoSizeInput
				[data:getItemStore(type):creator]
				initheight=48
			>
			<p
				.creator__placeholder 
				.visible=!checkLength(data:getItemStore(type):creator:value)
			>
				"create new {type}..."
			<button
				.creator__button 
				.{"creator__button-" + type}
				disabled=!checkLength(data:getItemStore(type):creator:value)
			>
				<i.fas .fa-plus-circle .creator__button__icon>