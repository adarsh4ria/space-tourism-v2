import { TechnologyDetailsProps } from '../props'
import styles from './Technology.module.css'

const TechnologyDetails = ({ details }: TechnologyDetailsProps) => {
  return (
    <div className={styles.details}>
      <span className="sub-heading-2">THE TERMINOLOGY...</span>
      <h1 className="h3">{details.name}</h1>
      <p>{details.description}</p>
    </div>
  )
}

export default TechnologyDetails
