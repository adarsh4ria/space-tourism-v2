import './destination.scss'

import { useState } from 'react'
import { destinations } from '../data'
import DestinationInformation from './DestinationInformation'
import Tabs from '../Components/Tabs/Tabs'

const Destination = () => {
  const [currentDestination, setCurrentDestination] = useState(destinations[0])

  return (
    <section className="destination">
      <h5 className="h5 destination__heading">
        <span>PICK YOUR DESTINATION</span>
      </h5>
      <div className="destination__information">
        <div className="destination__image">
          <img src={currentDestination.image} alt={currentDestination.name} />
        </div>
        <div>
          <Tabs
            changeHandler={(index) =>
              setCurrentDestination(destinations[index])
            }
            displayValues={destinations.map(({ name }) => name)}
            styles={{
              navStyle: 'destination__nav nav',
              menuStyle: 'destination__nav-list',
              buttonStyle: 'destination__nav-tab',
              activeStyle: 'active',
            }}
          />
          {/* <DestinationNav
            onClickHandler={(destination) => {
              setCurrentDestination(destination)
            }}
            currentDestination={currentDestination}
          /> */}
          <DestinationInformation destination={currentDestination} />
        </div>
      </div>
    </section>
  )
}

export default Destination
