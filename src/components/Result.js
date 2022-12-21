import React from 'react'

function Result({result, openPopup}) {
  return (
    <div className='result' onClick={openPopup}>
      <img src={result.Poster} />
      <h3>{result.Title}</h3>
    </div>
  )
}

export default Result