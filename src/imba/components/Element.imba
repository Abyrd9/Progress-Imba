import '../../style.scss'

export tag Element
	prop type

	def changeRoute
		router.go("/{type}/{data:key}")

	def render
		<self.element> <li.element__item .{"element__item-" + type}>
			<i.fas .fa-check-circle .element__item__icon .{"element__item__icon-" + type}>
			<p.element__item__goal-text> data:value
			<i.fas .fa-arrow-right .element__item__icon .{"element__item__icon-" + type} :tap.self.changeRoute>
