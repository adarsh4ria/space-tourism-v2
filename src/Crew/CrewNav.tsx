import { crew } from '../data'

import styles from './crew.module.css'

const CrewNav = ({
  onClickHandler,
  currentCrewMember,
}: {
  onClickHandler: { (crewMember: (typeof crew)[0]): void }
  currentCrewMember: (typeof crew)[0]
}) => {
  return (
    <div className={styles.tabs}>
      {crew.map((crewMember) => (
        <button
          key={'crew_' + crewMember.name}
          onClick={() => {
            onClickHandler(crewMember)
          }}
          className={
            crewMember.name === currentCrewMember.name ? styles.active : ''
          }
        ></button>
      ))}
    </div>
  )
}

export default CrewNav
