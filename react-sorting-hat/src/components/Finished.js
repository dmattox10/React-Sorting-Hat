import React from 'react'

export const Finished = props => {
  const { image } = props
  console.log(image)
  return (
    <>
      <img src={image} />
      <button onClick={() => window.location.reload(false)}>Click to retry!</button>
    </>
  )
}
