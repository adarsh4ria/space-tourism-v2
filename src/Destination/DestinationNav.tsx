import { destinations } from '../data'

interface Props {
  onClickHandler: { (destination: (typeof destinations)[0]): void }
  currentDestination: (typeof destinations)[0]
}

const DestinationNav = ({ onClickHandler, currentDestination }: Props) => {
  return (
    <nav className="destination__nav nav">
      <ul className="destination__nav-list">
        {destinations.map((destination) => (
          <li key={'destinations_' + destination.name}>
            <button
              className={`destination__nav-tab ${
                destination === currentDestination ? 'active' : ''
              }`}
              onClick={() => onClickHandler(destination)}
            >
              {destination.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default DestinationNav
