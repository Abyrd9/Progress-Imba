import React, {Component} from 'react';

import Block from './components/common/Block';
import ItemCreator from './components/common/ItemCreator';

class App extends Component {
    render() {
        return (
            <div className='global-container'>
							<Block type="goal">
								<ItemCreator placeholder="Create a goal..." />
							</Block>
            </div>
        )
    }
}

export default App;