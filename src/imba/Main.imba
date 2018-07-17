import {Page} from './Page'

import store from './components/Store'

export tag Main
	def render
		<self>
			<Page[store:goals] route='/'>
			<Page[store:subgoals] route='/goal/:key'>
			<Page[store:tasks] route='/subgoal/:key'>