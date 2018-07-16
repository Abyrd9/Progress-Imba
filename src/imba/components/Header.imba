import '../../style.scss'

export tag Header
	prop type
	prop hasbackbutton
	prop urlhistory default: []

	def changeRoute
		var url
		if type != 'task'
			url = '/'
		else
			url = urlhistory[urlhistory:length - 1]
		router.go(url)

	def render
		<self.header .{"header-" + type}>
			<h1.header__title> "Make Progress,"
			<p.header__subtitle> "check your "
				<span> "{type}s."
			if hasbackbutton
				<i.fas .fa-arrow-left .header__back-button :tap.self.changeRoute>