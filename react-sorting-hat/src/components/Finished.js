import React from 'react'

const Finished = () => {
    return (
        <button onClick={() => window.location.reload(false)}>Click to retry!</button>
    )
}

export default Finished