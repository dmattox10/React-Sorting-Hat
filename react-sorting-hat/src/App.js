import React, { useState } from 'react';
import { SortingContext } from './contexts/SortingContext'
import { useQuestions } from './hooks/useQuestions'

import Finished from './components/Finished'
import Progress from './components/Progress'
import Question from './components/Question'

import data from './data-copy'

const App = () => {
    const [question, addPoints, house, percentage] = useQuestions(data)
    console.log(question)
    return (
      <div className='App'>
        <SortingContext.Provider value={{ question, addPoints, house, percentage }}>
          <Progress />
          <Question />
        </SortingContext.Provider>
      </div>
    )
}

export default App
