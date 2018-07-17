import Header from './components/Header'
import Creator from './components/Creator'
import Element from './components/Element'
import store from './components/Store'

export tag Page
	prop subitems default: []
	prop urlhistory default: []
	prop items default: []

	def mount
		if data:type == 'goal'
			subitems = store:subgoals:items
		if data:type == 'subgoal'
			urlhistory.push(params:url)
			subitems = store:tasks:items

	def getItems arr
		for item in arr when item:parentkey == params:key
			items = item:items
			break;
		
	def render
		<self.page>
			<Header 
				hasbackbutton=data:hasBackButton 
				urlhistory=urlhistory 
				type=data:type
			>
			<div.page__content-block>
				<Creator[data] subitems=subitems paramkey=params:key>
				<span.page__divider>
				<ul.page__item-list>
					if data:type != 'goal'
						getItems(data:items)
						for item in items
							<Element[item] type=data:type>
					else
						for item in data:items
							<Element[item] type=data:type>
							
