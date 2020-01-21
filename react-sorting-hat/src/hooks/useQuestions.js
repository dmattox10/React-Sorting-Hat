import { useState, useEffect } from 'react'

const multiplier = 3.7

export const useQuestions = (data) => {
    const [questions, updateQuestions] = useState(shuffle(data))
    const [usedQuestions, updateUsedQuestions] = useState([])
    const [house, updateHouse] = useState('tie')
    const [question, updateQuestion] = useState(() => {
        const startQuestion = questions.pop()
        updateUsedQuestions(oldUsed => [...oldUsed, startQuestion])
        return startQuestion
    })
    const [points, updatePoints] = useState([])

    const calculateHouse = () => {
        updateHouse(getHighestValue(points, 1)[0])
    }

    const getHighestValue = (arr, count) => {
        var tmp = {}, tops = []
        arr.forEach(function(item) {
            tmp[item] = tmp[item] ? tmp[item]+1 : 1
        })
        tops = Object.keys(tmp).sort(function(a, b) { return tmp[a]-tmp[b] })
        return tops.slice(-(count)).reverse()
    }

    const setCurrentQuestion = () => {
        const currentQuestion = questions.pop()
        updateUsedQuestions(oldUsed => [...oldUsed, currentQuestion])
        updateQuestion(currentQuestion)
    }

    const addPoints = (houseArr) => {
        updatePoints(oldPoints => [...oldPoints, ...houseArr])
        
    }

    let percentage = Math.floor(usedQuestions.length * 3.7)

    useEffect(() => {
        updateHouse(getHighestValue(points, 1)[0])
        console.log(getHighestValue(points, 1))
        const currentQuestion = questions.pop()
        updateUsedQuestions(oldUsed => [...oldUsed, currentQuestion])
        updateQuestion(currentQuestion)

    }, [points])
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