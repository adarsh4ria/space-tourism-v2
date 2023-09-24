import { destinations } from '../data'

const DestinationInformation = ({
  destination,
}: {
  destination: (typeof destinations)[0]
}) => {
  return (
    <>
      <h1 className="h2">{destination.name}</h1>
      <p>{destination.description}</p>
      <hr className="destination__separator" />
      <div className="destination__details">
        <div>
          <p className="sub-heading-2">AVG. DISTANCE</p>
          <p className="sub-heading-1">{destination.distance}</p>
        </div>
        <div>
          <p className="sub-heading-2">EST. TRAVEL TIME</p>
          <p className="sub-heading-1">{destination.time}</p>
        </div>
      </div>
    </>
  )
}

export default DestinationInformation
