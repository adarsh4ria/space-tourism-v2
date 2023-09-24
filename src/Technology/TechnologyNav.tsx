import { technology } from '../data'

import styles from './Technology.module.css'

const TechnologyNav = ({
  onClickHandler,
  currentTechnology,
}: {
  onClickHandler: { (tech: (typeof technology)[0]): void }
  currentTechnology: (typeof technology)[0]
}) => {
  return (
    <div className={styles.tabs}>
      {technology.map((tech, index) => (
        <button
          key={tech.name + index}
          onClick={() => onClickHandler(technology[index])}
          className={
            currentTechnology.name === technology[index].name
              ? styles.active
              : ''
          }
        >
          <span className="h4">{index + 1}</span>
        </button>
      ))}
    </div>
  )
}

export default TechnologyNav
