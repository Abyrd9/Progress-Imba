import {Page} from './Page'
import {ProgressStore} from './components/Store'
import Header from './components/Header'
import Creator from './components/Creator'
import Element from './components/Element'
import Title from './components/Title'

tag Anotherpage
	prop type

	def mount
		data:setPrevUrl(params, type)

	def render
		<self.page>
			<Header
				type=type
				backbutton=data:getItemStore(type):hasBackButton
				url=data.prevUrl
			>
			<div.page__content-block>
				if type != 'goal'
					<Title[data]
						type=type
						paramkey=data:getParamKey(params)
					>
				<Creator[data]
					type=type
					paramkey=data:getParamKey(params)
				>
				<div.page__divider>
				<ul.page__item-list>
					for item in data:getItems(type, data:getParamKey(params))
						<Element[item] type=type>



var store = ProgressStore.new

export tag Main
	def render
		<self>
			<Anotherpage[store] type='goal' route='/'>
			<Anotherpage[store] type='subgoal' route='/goal/:key'>
			<Anotherpage[store] type='task' route='/subgoal/:key'>