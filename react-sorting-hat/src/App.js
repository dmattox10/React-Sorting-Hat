import React from 'react'
import { SortingContext } from './contexts/SortingContext'
import { useQuestions } from './hooks/useQuestions'

import { Message } from './components/Message'
import { Progress } from './components/Progress'
import { Question } from './components/Question'
import { QuestionNew } from './components/QuestionNew'

import data from './data-no-weights'

const App = () => {
  const [question, addPoints, house, percentage] = useQuestions(data)
  return (
    <div className='App'>
      <SortingContext.Provider value={{ question, addPoints, house, percentage }}>
          <div className='top-area'>
            <Progress />
          </div>
          <div className='middle-area'>
            <QuestionNew />
          </div>
      </SortingContext.Provider>
      <div className='bottom-area'>
        <h6>Created by Daniel Mattox, source code available <a href='https://github.com/dmattox10/React-Sorting-Hat'>here</a></h6>
      </div>
    </div>
  )
}

export default App
