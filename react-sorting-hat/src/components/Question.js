import React, { useContext } from 'react'

import { SortingContext } from '../contexts/SortingContext'

import { Finished } from './Finished'
import gryffindor from '../assets/gryffindor.png'
import hufflepuff from '../assets/hufflepuff.png'
import ravenclaw from '../assets/ravenclaw.png'
import slytherin from '../assets/slytherin.png'

const Question = (props) => {
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
        <div className="box-container">
            <div className="box-item">
                <div className="flip-box">
                    <div className="front text-center">
                        <div className="inner color-white blur-content"></div>
                        <div className='inner text'>
                            <h3 className="flip-box-header">Hover or Tap to flip the card and answer:</h3>
                            <p>{question.text}</p>
                            {/* <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-box-img" /> */}
                        </div>
                    </div>
                    <div className="back text-center">
                        <div className='inner color-white blur-content'></div>
                        <div className="inner text">
                                <h3 className="flip-box-header">Un-hover or Tap the brick background to flip the card back and read the question:</h3>
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
            </div>
    )
}

export default Question

