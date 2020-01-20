import React, { useState } from 'react'

const Progress = props => {
    const percentage = '75'
    const [color, setColor] = useState('green')
    return (
    <div className="container">
        <section>
            <article>
                <input type="radio" name="switch-color" id="red" checked={color === 'red'} />
                <input type="radio" name="switch-color" id="blue" checked={color === 'blue'} />
                <input type="radio" name="switch-color" id="green" checked={color === 'green'} />
                <input type="radio" name="switch-color" id="yellow" checked={color === 'yellow'} />
                <input type="radio" name="switch-color" id="gray" checked={color === 'gray'} />
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