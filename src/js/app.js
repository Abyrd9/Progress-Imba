import React, {Component} from 'react';

import Block from './components/common/Block';

class App extends Component {
    render() {
        return (
            <div className='global-container'>
							<Block type="goal" />
            </div>
        )
    }
}

export default App;