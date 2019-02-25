import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/techlog">
            TECH LOG
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/dailylog">
            DAILY LOG
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/portfolio">
            PORTFOLIO
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/resume">
            RESUME
          </Link>
        </li>
      </ul>
      <ul className="actions vertical">
        <li>
          <a
            href="https://github.com/rayleighko"
            className="button special fit"
          >
            MY GITHUB
          </a>
        </li>
        <li>
          <Link
            className="button fit"
            onClick={props.onToggleMenu}
            to="/#contact"
          >
            CONTACT ME
          </Link>
        </li>
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
