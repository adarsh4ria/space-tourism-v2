import { useState } from 'react'

interface Props {
  displayValues: string[]
  changeHandler: { (index: number): void }
  styles: {
    navStyle?: string
    menuStyle?: string
    liStyle?: string
    buttonStyle?: string
    displayStyle?: string
    activeStyle?: string
  }
}

const Tabs = ({ displayValues, styles, changeHandler }: Props) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <nav className={styles.navStyle ?? ''}>
      <menu className={styles.menuStyle ?? ''}>
        {displayValues.map((value, index) => (
          <li key={value + index} className={styles.liStyle ?? ''}>
            <button
              className={`${styles.buttonStyle ?? ''} ${
                activeTab === index ? styles.activeStyle : ''
              }`}
              onClick={() => {
                changeHandler(index)
                setActiveTab(index)
              }}
            >
              <span className={styles.displayStyle ?? ''}>{value}</span>
            </button>
          </li>
        ))}
      </menu>
    </nav>
  )
}

export default Tabs
