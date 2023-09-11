import './destination.scss'

import { useState } from 'react'
import { destinations } from '../data'

const Destination = () => {
  const [currentDestination, setCurrentDestination] = useState(destinations[0])

  return (
    <div className="destination">
      <h5 className="destination__heading">
        <span>PICK YOUR DESTINATION</span>
      </h5>
      <div className="destination__information">
        <div className="destination__image">
          <img
            id="image"
            src={`/src/assets/destinations/${currentDestination.name}.png`}
            alt={currentDestination.name}
          />
        </div>
        <div>
          <nav className="destination__nav nav">
            <ul className="destination__nav-list">
              {destinations.map((destination) => (
                <li key={'destinations_' + destination.name}>
                  <button
                    className={`destination__nav-tab ${
                      destination === currentDestination ? 'active' : ''
                    }`}
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
          <h2 id="name">{currentDestination.name}</h2>
          <p id="description">{currentDestination.description}</p>
          <hr className="destination__separator" />
          <div className="destination__details">
            <div>
              <div className="sub-heading-2">AVG. DISTANCE</div>
              <div className="sub-heading-1">{currentDestination.distance}</div>
            </div>
            <div>
              <div className="sub-heading-2">EST. TRAVEL TIME</div>
              <div className="sub-heading-1">{currentDestination.time}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination
