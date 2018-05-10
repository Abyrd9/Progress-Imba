import React, {Component} from 'react';

import Block from './components/common/Block';
import ItemCreator from './components/common/ItemCreator';
import Container from './components/common/Container';
import Item from './components/common/Item';

class App extends Component {
    render() {
        return (
            <div className='global-container'>
							<Block type="goal">
								<Container type="goal">
									<Item type="goal"/>
								</Container>
								<ItemCreator placeholder="Create a goal..." type="goal"/>
							</Block>
            </div>
        )
    }
}

export default App;