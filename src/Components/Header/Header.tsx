import icon from '../../assets/icons/icon.svg'
import hamburgerIcon from '../../assets/icons/hamburger-menu.svg'
import closeIcon from '../../assets/icons/close-menu.svg'
import './header.scss'

import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const mobileView = window.innerWidth < 480
  const [navHidden, setNavHidden] = useState(mobileView)
  const [menuButtonIcon, setMenuButtonIcon] = useState(hamburgerIcon)

  const links = [
    ['/', 'Home'],
    ['/destination', 'Destination'],
    ['/crew', 'Crew'],
    ['/technology', 'Technology'],
  ]

  const toggleNav = () => {
    setNavHidden((navHidden) => {
      setMenuButtonIcon(navHidden ? closeIcon : hamburgerIcon)
      return !navHidden
    })
  }

  return (
    <header className="header">
      <Link to={'/'}>
        <img src={icon} alt="icon" className="header__icon" />
      </Link>
      <button onClick={toggleNav} className="header__mobile-nav-icon">
        <img src={menuButtonIcon} alt="menu" />
      </button>
      {!navHidden ? (
        <nav className="primary-navigation nav">
          <ul className="primary-navigation__list">
            {links.map(([link, page], index) => (
              <li key={link}>
                <NavLink
                  to={link}
                  className={({ isActive }) =>
                    `primary-navigation__link ${isActive ? 'active' : ''}`
                  }
                  onClick={() => {
                    mobileView && toggleNav()
                  }}
                >
                  <span>0{index}</span>
                  {page}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}

export default Header
