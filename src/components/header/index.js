import PropTypes from "prop-types"
import React from "react"

import Nav from "../nav"
import Logo from "../logo"
import styles from "./styles.module.css"

const Header = () => (
  <div className={styles.header}>
    <Nav className={styles.nav} />
    <Logo />
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

export default Header
