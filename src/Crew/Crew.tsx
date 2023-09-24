import { useState } from 'react'
import { crew } from '../data'
import styles from './crew.module.css'
import CrewDetails from './CrewDetails'
import CrewNav from './CrewNav'

const Crew = () => {
  const [currentCrewMember, setCurrentCrewMember] = useState(crew[0])

  return (
    <section className={`crew ${styles.crew}`}>
      <h5 className={'h5 ' + styles.heading}>
        <span>MEET YOUR CREW</span>
      </h5>
      <div className={styles.information}>
        <div className={styles['image-container']}>
          <img
            width="500px"
            src={`/src/assets/crew/${currentCrewMember.name}.png`}
            alt={currentCrewMember.name}
          />
          <hr />
        </div>
        <CrewNav
          onClickHandler={(crewMember) => {
            setCurrentCrewMember(crewMember)
          }}
          currentCrewMember={currentCrewMember}
        />
        <CrewDetails details={currentCrewMember} />
      </div>
    </section>
  )
}

export default Crew
