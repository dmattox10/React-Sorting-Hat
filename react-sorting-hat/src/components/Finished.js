import React from 'react'

const Finished = props => {

    const { image } = props
    console.log(image)
    return (
        <div>
            <img src={image} />
            <button onClick={() => window.location.reload(false)}>Click to retry!</button>
        </div>
    )
}

export default Finished