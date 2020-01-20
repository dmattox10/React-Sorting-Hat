import React, { useContext } from 'react'
import { SortingContext } from '../contexts/SortingContext'

const Progress = props => {
    const { house, percentage } = useContext(SortingContext)
    return (
    <div className="container">
        <section>
            <article>
                <input type="radio" name="switch-color" id="red" checked={house === 'gryffindor'} />
                <input type="radio" name="switch-color" id="blue" checked={house === 'ravenclaw'} />
                <input type="radio" name="switch-color" id="green" checked={house === 'slytherin'} />
                <input type="radio" name="switch-color" id="yellow" checked={house === 'hufflepuff'} />
                <input type="radio" name="switch-color" id="gray" checked={house === 'tie'} />
                <div className="chart">
                    <div className={`bar gray bar-${percentage}`}>
                        <div className="face top">
                            <div className="growing-bar"></div>
                        </div>
                        <div className="face side-0">
                            <div className="growing-bar"></div>
                        </div>
                        <div className="face floor">
                            <div className="growing-bar"></div>
                        </div>
                        <div className="face side-a"></div>
                        <div className="face side-b"></div>
                        <div className="face side-1">
                            <div className="growing-bar"></div>
                        </div>
                    </div>
                </div>
            </article>            
        </section>
    </div> 
    )
}

export default Progress

/*
<nav class="actions">
    <label for="red">Red</label>
    <label for="blue">Blue</label>
    <label for="green">Green</label>
    <label for="yellow">Yellow</label>
</nav>

<div className="bar bar-64 gray"
*/