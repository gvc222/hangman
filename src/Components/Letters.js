import React from 'react'

export const Letters = ({ wrongLetters }) => {
  return (
    <div className='wrong-letters-container'>
        <div className="wrong-letters">
            {wrongLetters.length > 0 && <p>Wrong</p>}
            {wrongLetters
                .map((letter, i) => <span key={i}>{letter}</span>)
                .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
        </div>
    </div>
  )
}
