import React, { useState } from 'react';
import { SortingContext } from './contexts/SortingContext'

import Progress from './components/Progress'

const App = () => {
    const [house, updateHouse] = useState('tie')
    const [percentage, updatePercentage] = useState(0)

    return (
      <div className='App'>
        <SortingContext.Provider value={{ house, percentage }}>
          <Progress />
        </SortingContext.Provider>
      </div>
    )
}

export default App
