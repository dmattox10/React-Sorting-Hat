import React, { useContext } from 'react'
import { SortingContext } from '../contexts/SortingContext'

export const Progress = props => {
  const { house, percentage } = useContext(SortingContext)
  return (
    <div className='progress'>
      <section>
        <article>
          <input type='radio' name='switch-color' id='red' checked={house === 'gryffindor'} onChange={() => {}} />
          <input type='radio' name='switch-color' id='blue' checked={house === 'ravenclaw'} onChange={() => {}} />
          <input type='radio' name='switch-color' id='green' checked={house === 'slytherin'} onChange={() => {}} />
          <input type='radio' name='switch-color' id='yellow' checked={house === 'hufflepuff'} onChange={() => {}} />
          <input type='radio' name='switch-color' id='gray' checked={house === 'tie'} onChange={() => {}} />
          <div className='chart'>
            <div className={`bar gray bar-${percentage}`}>
              <div className='face top'>
                <div className='growing-bar' />
              </div>
              <div className='face side-0'>
                <div className='growing-bar' />
              </div>
              <div className='face floor'>
                <div className='growing-bar' />
              </div>
              <div className='face side-a' />
              <div className='face side-b' />
              <div className='face side-1'>
                <div className='growing-bar' />
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}
