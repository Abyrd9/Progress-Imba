export tag AutoSizeInput
	prop initheight
	prop classname

	def setup
		@ghost = null
		@height = initheight

	def mount
		@ghost = @dom:getElementsByClassName('autosize-container__ghost')[0]

	def autoSize
		var elementHeight = @ghost:clientHeight
		if elementHeight >= initheight
			@height = elementHeight
		self

	def valueChange event
		if event.target.value != ''
			data:value = event.target.value
			autoSize(event.native:srcElement:nextSibling)
		else
			data:value = event.target.value
		self

	def render
		<self.autosize-container .{classname}>
			<textarea
				[data:value]
				:keyup.valueChange
				:input.valueChange
				.autosize-container__input
				css:height=@height
			>
			<div.autosize-container__ghost> data:value