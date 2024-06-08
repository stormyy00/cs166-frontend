import React, { useState } from 'react'

const Stuff = () => {
    const [word, setWord] = useState('')
    
  return (
    <div>
        <input value={value} onChange={(value) => setWord(value)}/>
      {word}
    </div>
  )
}

export default Stuff
