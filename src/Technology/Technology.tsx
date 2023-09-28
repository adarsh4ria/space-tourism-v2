import { useState } from 'react'
import { technology } from '../data'

import styles from './Technology.module.css'
import TechnologyDetails from './TechnologyDetails'
// import TechnologyNav from './TechnologyNav'
import Tabs from '../Components/Tabs/Tabs'

const Technology = () => {
  const [currentTechnology, setCurrentTechnology] = useState(technology[0])
  return (
    <section className="technology">
      <h1 className={'h5 ' + styles.heading}>
        <span>SPACE LAUNCH 101</span>
      </h1>
      <div className={styles.information}>
        <div className={styles['image-container']}>
          <img src={currentTechnology.image} alt={currentTechnology.name} />
        </div>
        <Tabs
          changeHandler={(index) => {
            setCurrentTechnology(technology[index])
          }}
          displayValues={technology.map((_, index) => (index + 1).toString())}
          styles={{
            activeStyle: styles.active,
            displayStyle: 'h4',
            navStyle: styles.tabs,
          }}
        />
        {/* <TechnologyNav
          onClickHandler={(tech) => setCurrentTechnology(tech)}
          currentTechnology={currentTechnology}
        /> */}
        <TechnologyDetails details={currentTechnology} />
      </div>
    </section>
  )
}

export default Technology
