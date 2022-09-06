import React, { useState } from 'react';
import { SortingContext } from './contexts/SortingContext'
import { useQuestions } from './hooks/useQuestions'

import { Finished } from './components/Finished'
import { Message } from './components/Message'
import { Progress } from './components/Progress'
import { Question } from './components/Question'

import data from './data-no-weights'

const App = () => {
    const [question, addPoints, house, percentage] = useQuestions(data)
    console.log(question)
    return (
      <div className='App'>
        <SortingContext.Provider value={{ question, addPoints, house, percentage }}>
          <div className='container'>
          <Message />
          <Question />
          <Progress />
          </div>
        </SortingContext.Provider>
      </div>
    )
}

export default App
