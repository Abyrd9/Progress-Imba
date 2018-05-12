import React, {Component} from 'react';

import GoalBlock from './components/GoalBlock';

class App extends Component {
    render() {
        return (
            <div className='global-container'>
							<GoalBlock />
            </div>
        )
    }
}

export default App;