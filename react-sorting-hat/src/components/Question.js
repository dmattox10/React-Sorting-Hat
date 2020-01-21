import React, { useContext } from 'react'
import { SortingContext } from '../contexts/SortingContext'

const Question = () => {
    const { question, addPoints } = useContext(SortingContext)
    return (
        <div className='card-wrapper'>
            <div className='card-container'>
                <div className='card'>
                    <div className='front'>
                        <p>Front</p>
                    </div>
                    <div className='back'>
                        <p>Back</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question