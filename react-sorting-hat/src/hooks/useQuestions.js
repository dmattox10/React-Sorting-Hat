import { useState, useEffect } from 'react'

const multiplier = 3.7

export const useQuestions = (data) => {
  const [questions] = useState(shuffle(data))
  const [usedQuestions, updateUsedQuestions] = useState([])
  const [house, updateHouse] = useState('tie')
  const [question, updateQuestion] = useState(() => {
    const startQuestion = questions.pop()
    updateUsedQuestions(oldUsed => [...oldUsed, startQuestion])
    return startQuestion
  })
  const [points, updatePoints] = useState([])

  const getHighestValue = (arr) => {
    const counts = {}
    for (let i = 0; i < arr.length; i++) {
      const house = arr[i]
      counts[house] = counts[house] ? counts[house] + 1 : 1
    }
    const sortable = []
    for (const house in counts) {
      sortable.push(counts[house])
    }
    sortable.sort(function (a, b) {
      return b - a
    })
    if (sortable[0] === sortable[1]) {
      return 'tie'
    } else {
      for (const house in counts) {
        if (counts[house] === sortable[0]) {
          return house
        }
      }
    }
  }

  const getWinner = (arr) => {
    const counts = {}
    for (let i = 0; i < arr.length; i++) {
      const house = arr[i]
      counts[house] = counts[house] ? counts[house] + 1 : 1
    }
    const sortable = []
    for (const house in counts) {
      sortable.push(counts[house])
    }
    sortable.sort(function (a, b) {
      return b - a
    })

    for (const house in counts) {
      if (counts[house] === sortable[0]) {
        return house
      }
    }
  }
  /*
    const setCurrentQuestion = () => {
        const currentQuestion = questions.pop()
        updateUsedQuestions(oldUsed => [...oldUsed, currentQuestion])
        updateQuestion(currentQuestion)
    }
    */
  const addPoints = (houseArr) => {
    let nextQuestion
    updatePoints(oldPoints => [...oldPoints, ...houseArr])
    if (questions.length > 0) {
      nextQuestion = questions.pop()
    } else {
      nextQuestion = finale()
    }
    updateUsedQuestions(oldUsed => [...oldUsed, nextQuestion])
    updateQuestion(nextQuestion)
  }

  const finale = () => {
    return {
      text: 'Your house is....',
      id: 27,
      answers: [
        {
          text: `${getWinner(points)}`,
          house: []
        }
      ]
    }
  }

  const percentage = Math.floor(usedQuestions.length * multiplier)

  useEffect(() => {
    updateHouse(getHighestValue(points))
    // const currentQuestion = questions.pop()
    // const currentQuestion = usedQuestions[usedQuestions.length - 1]
    // updateUsedQuestions(oldUsed => [...oldUsed, currentQuestion])
    // updateQuestion(currentQuestion)
  }, [points])
  return [question, addPoints, house, percentage]
}

const shuffle = (array) => {
  let currentIndex = array.length; let temporaryValue; let randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}
