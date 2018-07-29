import AutoSizeInput from './AutoSizeInput';

export tag Title
	prop type
	prop paramkey

	def mount
		console.log data:getItem(type, paramkey)

	def build
		@deleteTitle = false
		@editTitle = false
		@menuVisible = false
		@popupVisible = false

	def toggleMenu
		if !@editTitle && !@deleteTitle && !@popupVisible
			@menuVisible = !@menuVisible
		self

	def toggleEdit
		@popupVisible = true
		@editTitle = true
		@menuVisible = false
		self

	def toggleDelete
		@popupVisible = true
		@deleteTitle = true
		@menuVisible = false
		self

	def cancelEdit
		data:editValue = { value: data:value}
		console.log data:editValue
		@popupVisible = false
		@editTitle = false

	def completeEdit
		data:getItem(type, paramkey):value = data:getItem(type, paramkey):editValue:value
		@popupVisible = false
		@editTitle = false

	def cancelDelete
		@popupVisible = false
		@deleteTitle = false

	def deleteItem
		@popupVisible = false
		@deleteTitle = false
		data:removeItem(data:getItem(type, paramkey))
		if type == 'task'
			router.go("/goal/{data.@prevKey}")
		else 
			router.go('/')

	def render
		<self.title>
			<p.title__title-text> data:getItem(type, paramkey):value
			<div.title__popup .title__popup__visible=@popupVisible>
				if @deleteTitle
					<div.title__popup__button-container>
						<button.title__popup__button :tap.self="cancelDelete"> "Cancel"
						<button.title__popup__button :tap.self="deleteItem"> "Delete"
				if @editTitle
					<AutoSizeInput
						[data:getItem(type, paramkey):editValue]
						classname="title__popup__input"
						initheight=48
					>
					<div.title__popup__icon-container>
						<i.fas .fa-times .title__popup__icon :tap.self="cancelEdit">
						<i.fas .fa-check .title__popup__icon :tap.self="completeEdit">
			<i.fas .fa-ellipsis-v .title__icon .{"title__icon__" + type} :tap.self='toggleMenu'>
				<div.title__menu-popup .title__menu-popup__visible=@menuVisible>
					<i.fas .fa-edit .title__menu-popup__icon :tap.self='toggleEdit'>
					<i.fas .fa-times-circle .title__menu-popup__icon :tap.self='toggleDelete'>