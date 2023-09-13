import { useState } from 'react'
import { crew } from '../data'
import styles from './crew.module.css'
console.log(styles)

const Crew = () => {
  const [currentCrewMember, setCurrentCrewMember] = useState(crew[0])

  return (
    <section className={`crew ${styles.crew}`}>
      <h5 className={styles.heading}>
        <span>MEET YOUR CREW</span>
      </h5>
      <div className={styles.information}>
        <div className={styles['image-container']}>
          <img
            width="500px"
            src={`/src/assets/crew/${currentCrewMember.name}.png`}
          />
          <hr />
        </div>
        <div className={styles.tabs}>
          {crew.map((crewMember) => (
            <button
              key={'crew_' + crewMember.name}
              onClick={() => {
                setCurrentCrewMember(crewMember)
              }}
              className={
                crewMember.name === currentCrewMember.name ? styles.active : ''
              }
            ></button>
          ))}
        </div>
        <div className={styles.details}>
          <h4 className={styles.job}>{currentCrewMember.job}</h4>
          <h3>{currentCrewMember.name}</h3>
          <p>{currentCrewMember.description}</p>
        </div>
      </div>
    </section>
  )
}

export default Crew
