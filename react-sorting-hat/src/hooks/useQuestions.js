import { useState, useEffect } from 'react'

const multiplier = 3.7

export const useQuestions = (data) => {
    const [questions, updateQuestions] = useState(shuffle(data))
    const [usedQuestions, updateUsedQuestions] = useState(['entry'])
    const [house, updateHouse] = useState('tie')
    const [question, updateQuestion] = useState(questions.pop())

    const addPoints = (houseArr) => {

    }

    let percentage = Math.floor(usedQuestions.length * 3.7)

    useEffect(() => {

    }, [questions, usedQuestions])
    console.log(percentage)
    return [question, addPoints, house, percentage]
}

const shuffle = (array) => {
    
    var currentIndex = array.length, temporaryValue, randomIndex;
    
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    
    return array;

}