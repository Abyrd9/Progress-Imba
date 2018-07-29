import '../../style.scss'

export tag Header
	prop type
	prop backbutton
	prop url

	def changeRoute
		if type != 'task'
			router.go('/')
		else
			router.go(url)

	def render
		<self.header .{"header-" + type}>
			<h1.header__title> "Make Progress,"
			<p.header__subtitle> "check your "
				<span> "{type}s."
			if backbutton
				<i.fas .fa-arrow-left .header__back-button :tap.self.changeRoute>