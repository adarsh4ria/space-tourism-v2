import { useState } from 'react'
import { crew } from '../data'

const Crew = () => {
  const [currentCrewMember, setCurrentCrewMember] = useState(crew[0])

  return (
    <div>
      <h5>MEET YOUR CREW</h5>
      <main>
        <div>
          <h4 id="job">{currentCrewMember.job}</h4>
          <h3 id="name">{currentCrewMember.name}</h3>
          <p id="description">{currentCrewMember.description}</p>
          <div>
            {crew.map((crewMember) => (
              <button
                key={'crew_' + crewMember.name}
                onClick={() => {
                  setCurrentCrewMember(crewMember)
                }}
              >
                a
              </button>
            ))}
          </div>
        </div>
        <div>
          <img
            id="image"
            width="500px"
            src={`/src/assets/crew/${currentCrewMember.name}.png`}
          />
        </div>
      </main>
    </div>
  )
}

export default Crew
