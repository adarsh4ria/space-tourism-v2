import { useState } from 'react'
import { destinations } from '../data'

const Destination = () => {
  const [currentDestination, setCurrentDestination] = useState(destinations[0])

  return (
    <div>
      <h5>PICK YOUR DESTINATION</h5>
      <main>
        <div>
          <img
            id="image"
            src={`/src/assets/destinations/${currentDestination.name}.png`}
            alt={currentDestination.name}
            width="500px"
          />
        </div>
        <div>
          <div>
            <nav>
              <ul>
                {destinations.map((destination) => (
                  <li key={'destinations_' + destination.name}>
                    <button
                      onClick={() => {
                        setCurrentDestination(destination)
                      }}
                    >
                      {destination.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <h2 id="name">{currentDestination.name}</h2>
          <p id="description">{currentDestination.description}</p>
          <div>
            <div>
              <div>AVG. DISTANCE</div>
              <div id="distance">{currentDestination.distance}</div>
            </div>
            <div>
              <div>EST. TRAVEL TIME</div>
              <div id="time">{currentDestination.time}</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Destination
