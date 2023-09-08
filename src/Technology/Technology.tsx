import { useState } from 'react'
import { technology } from '../data'

const Technology = () => {
  const [currentTechnology, setCurrentTechnology] = useState(technology[0])
  return (
    <div>
      <h5>SPACE LAUNCH 101</h5>
      <main>
        <div>
          <button onClick={() => setCurrentTechnology(technology[0])}>
            <h4>1</h4>
          </button>
          <button onClick={() => setCurrentTechnology(technology[1])}>
            <h4>2</h4>
          </button>
          <button onClick={() => setCurrentTechnology(technology[2])}>
            <h4>3</h4>
          </button>
        </div>
        <div>
          <div>THE TERMINOLOGY...</div>
          <h3 id="name">{currentTechnology.name}</h3>
          <p id="description">{currentTechnology.description}</p>
        </div>
        <div>
          <img
            id="image"
            width={'500px'}
            src={`/src/assets/technology/${currentTechnology.name}.png`}
          />
        </div>
      </main>
    </div>
  )
}

export default Technology
