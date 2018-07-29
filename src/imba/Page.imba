
import Header from './components/Header'
import Creator from './components/Creator'
import Element from './components/Element'
import Title from './components/Title'
import store from './components/Store'

export tag Page
	prop type
	prop items default: []

	def build
		@paramkey = ''

	def mount
		if params:key
			@paramkey = params:key
			if type == 'subgoal'
				store:tasks:prevUrl = "/goal/{@paramkey}"
				store:tasks:goalKey = @paramkey

	def getItems arr
		for item in arr when item:parentKey == params:key
			items = item:items
			break;

	def getTitleItem
		if type == 'subgoal'
			for item in store:goals:items when item:key == params:key
				return item
		else if type == 'task'
			let goalkey = store:tasks:goalKey
			let subItems = []
			for item in store:subgoals:items when item:parentKey == goalkey
				subItems = item:items
			for item in subItems when item:key == params:key
				return item

	var removeItem = do |type, key|
		console.log "ran"
		if type != 'goal'
			console.log type
			let items
			for item in store["{type}s"]:items when item:parentKey == params:key
				items = item:items
			for item,i in items when item:key == key
				items.splice(i, 1)
		else
			for item,i in store["{type}s"]:items when item:key == key
				store["{type}s"]:items.splice(i, 1)
		console.log store

	def render
		<self.page>
			<Header 
				type=type
				backbutton=store["{type}s"]:hasBackButton
				url=store["{type}s"]:prevUrl
			>
			<div.page__content-block>
				if type != 'goal'
					<Title
						[getTitleItem()]
						type=type
						paramkey=params:key
						removeitem=removeItem
					>
				<Creator[store] type=type paramkey=params:key>
				<div.page__divider>
				<ul.page__item-list>
					if type != 'goal'
						getItems(store["{type}s"]:items)
						for item in items
							<Element[item] type=type>
					else
						for item in store["{type}s"]:items
							<Element[item] type=type>
