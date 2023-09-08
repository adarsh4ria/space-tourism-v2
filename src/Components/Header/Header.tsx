import icon from '../../assets/icons/icon.svg'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <img src={icon} alt="icon" />
      <nav>
        <ul>
          <li>
            <Link to="/">
              <span>01</span>
              Home
            </Link>
          </li>
          <li>
            <Link to={'/destination'}>
              <span>02</span>
              Destination
            </Link>
          </li>
          <li>
            <Link to={'/crew'}>
              <span>03</span>
              Crew
            </Link>
          </li>
          <li>
            <Link to={'/technology'}>
              <span>04</span>
              Technology
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
