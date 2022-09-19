import { useContext } from 'react'

import { SortingContext } from '../contexts/SortingContext'

import { Finished } from './Finished'

import gryffindor from '../assets/gryffindor.webp'
import hufflepuff from '../assets/hufflepuff.webp'
import ravenclaw from '../assets/ravenclaw.webp'
import slytherin from '../assets/slytherin.webp'

export const Question = () => {
  const imageSwitch = house => {
    switch (house) {
      case 'gryffindor':
        return gryffindor
      case 'hufflepuff':
        return hufflepuff
      case 'ravenclaw':
        return ravenclaw
      case 'slytherin':
        return slytherin
      default:
        return null
    }
  }

  const { question, addPoints } = useContext(SortingContext)
  return (
    <div className='card-wrapper'>
      <div className='card-container'>
        <div className='card'>
          <div className='front'>
            <p>{question.text}</p>
          </div>
          <div className='back'>
            <form>
              {question.answers.map((answer, i) =>
                <div
                  className='form-check'
                  key={i}
                  onClick={() => addPoints(answer.house)}
                >
                  <label>
                    <input
                      type='radio'
                      name={question.id}
                      value={answer.house}
                      className='form-check-input'
                    />
                    {answer.text}
                  </label>
                  {question.id === 27 ? <Finished image={imageSwitch(answer.text)} /> : null}
                </div>
              )}
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}
