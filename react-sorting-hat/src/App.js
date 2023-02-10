import React from 'react'
import { SortingContext } from './contexts/SortingContext'
import { useQuestions } from './hooks/useQuestions'

import { Message } from './components/Message'
import { Progress } from './components/Progress'
import  Question  from './components/Question'

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
            <Question />
          </div>
      </SortingContext.Provider>
      <div className='bottom-area'>
        <h6 className='text-center text'>Created by Daniel Mattox, source code available <a className='text' href='https://github.com/dmattox10/React-Sorting-Hat'>here</a></h6>
      </div>
      <svg id="svg-filter">
        <filter id="svg-blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4"></feGaussianBlur>
        </filter>
    </svg>
    </div>
  )
}

export default App
