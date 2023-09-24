import './destination.scss'

import { useState } from 'react'
import { destinations } from '../data'
import DestinationInformation from './DestinationInformation'
import DestinationNav from './DestinationNav'

const Destination = () => {
  const [currentDestination, setCurrentDestination] = useState(destinations[0])

  return (
    <section className="destination">
      <h5 className="h5 destination__heading">
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
          <DestinationNav
            onClickHandler={(destination) => {
              setCurrentDestination(destination)
            }}
            currentDestination={currentDestination}
          />
          <DestinationInformation destination={currentDestination} />
        </div>
      </div>
    </section>
  )
}

export default Destination
