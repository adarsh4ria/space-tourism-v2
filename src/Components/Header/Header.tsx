import icon from '../../assets/icons/icon.svg'
import hamburgerIcon from '../../assets/icons/hamburger-menu.svg'
import closeIcon from '../../assets/icons/close-menu.svg'
import './header.scss'

import { Link, NavLink } from 'react-router-dom'
import { useRef, useState } from 'react'

const Header = () => {
  const [navHidden, setNavHidden] = useState(true)
  const navRef = useRef(document.createElement('nav'))

  const links = [
    ['/', 'Home'],
    ['/destination', 'Destination'],
    ['/crew', 'Crew'],
    ['/technology', 'Technology'],
  ]

  return (
    <header className="header">
      <Link to={'/'}>
        <img src={icon} alt="icon" className="header__icon" />
      </Link>
      <button
        onClick={(e) => {
          e.currentTarget.children[0].src = navHidden
            ? closeIcon
            : hamburgerIcon
          navRef.current.style.display = navHidden ? 'block' : 'none'
          setNavHidden(!navHidden)
        }}
        className="header__mobile-nav-icon"
      >
        <img src={hamburgerIcon} alt="menu" />
      </button>
      <nav className="primary-navigation nav" ref={navRef}>
        <ul className="primary-navigation__list">
          {links.map(([link, page], index) => (
            <li key={link}>
              <NavLink
                to={link}
                className={({ isActive }) =>
                  `primary-navigation__link ${isActive ? 'active' : ''}`
                }
              >
                <span>0{index}</span>
                {page}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
