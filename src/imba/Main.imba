import {Page} from './Page'

import store from './components/Store'
import Auth from './components/Auth';

export tag Main
	def render
		<self>
			<Auth title="Sign In" subtitle="Hello There! Welcome Back to Progress.">
			# <Page[store:goals] route='/'>
			# <Page[store:subgoals] route='/goal/:key'>
			# <Page[store:tasks] route='/subgoal/:key'>