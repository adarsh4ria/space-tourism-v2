import { useState } from 'react'
import { technology } from '../data'

import styles from './Technology.module.css'

const Technology = () => {
  const [currentTechnology, setCurrentTechnology] = useState(technology[0])
  return (
    <section className="technology">
      <h5 className={styles.heading}>
        <span>SPACE LAUNCH 101</span>
      </h5>
      <div className={styles.information}>
        <div className={styles['image-container']}>
          <img
            src={`/src/assets/technology/${currentTechnology.name}.png`}
            alt={currentTechnology.name}
          />
        </div>
        <div className={styles.tabs}>
          <button
            onClick={() => setCurrentTechnology(technology[0])}
            className={
              currentTechnology.name === technology[0].name ? styles.active : ''
            }
          >
            <h4>1</h4>
          </button>
          <button
            onClick={() => setCurrentTechnology(technology[1])}
            className={
              currentTechnology.name === technology[1].name ? styles.active : ''
            }
          >
            <h4>2</h4>
          </button>
          <button
            onClick={() => setCurrentTechnology(technology[2])}
            className={
              currentTechnology.name === technology[2].name ? styles.active : ''
            }
          >
            <h4>3</h4>
          </button>
        </div>
        <div className={styles.details}>
          <div className="sub-heading-2">THE TERMINOLOGY...</div>
          <h3 id="name">{currentTechnology.name}</h3>
          <p id="description">{currentTechnology.description}</p>
        </div>
      </div>
    </section>
  )
}

export default Technology
