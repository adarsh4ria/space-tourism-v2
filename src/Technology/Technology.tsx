import { useState } from 'react'
import { technology } from '../data'

import styles from './Technology.module.css'
import TechnologyDetails from './TechnologyDetails'
import TechnologyNav from './TechnologyNav'

const Technology = () => {
  const [currentTechnology, setCurrentTechnology] = useState(technology[0])
  return (
    <section className="technology">
      <h1 className={'h5 ' + styles.heading}>
        <span>SPACE LAUNCH 101</span>
      </h1>
      <div className={styles.information}>
        <div className={styles['image-container']}>
          <img
            src={`/src/assets/technology/${currentTechnology.name}.png`}
            alt={currentTechnology.name}
          />
        </div>
        <TechnologyNav
          onClickHandler={(tech) => setCurrentTechnology(tech)}
          currentTechnology={currentTechnology}
        />
        <TechnologyDetails details={currentTechnology} />
      </div>
    </section>
  )
}

export default Technology
