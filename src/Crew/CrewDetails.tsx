import { CrewDetailsProps } from '../props'
import styles from './crew.module.css'

const CrewDetails = ({ details }: CrewDetailsProps) => {
  return (
    <div className={styles.details}>
      <h4 className={`${styles.job} h4`}>{details.job}</h4>
      <h1 className="h3">{details.name}</h1>
      <p>{details.description}</p>
    </div>
  )
}

export default CrewDetails
