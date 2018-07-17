export tag AutoSizeInput
	def mount
		data:ghost = @dom:getElementsByClassName('autosize-container__ghost')[0]

	def autoSize
		var elementHeight = data:ghost:clientHeight
		if elementHeight >= 48
			data:height = elementHeight

	def valueChange event
		if event.target.value != ''
			data:hasText = true;
			data:value = event.target.value
			autoSize(event.native:srcElement:nextSibling)
		else
			data:hasText = false;
			data:value = event.target.value

	def render
		<self.autosize-container>
			<textarea
				[data:value]
				:keyup.valueChange
				:input.valueChange
				.autosize-container__input .creator__input
				css:height=data:height
			>
			<div.autosize-container__ghost .creator__input> data:value