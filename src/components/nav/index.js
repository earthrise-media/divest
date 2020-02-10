import React from "react"
import { Link } from "gatsby"
import { Location } from "@reach/router"

import styles from "./styles.module.css"

const PAGES = [{ to: "/about", display: "About" }]

export default ({ ...spreadableProps }) => {
  return (
    <Location>
      {({ location }) => {
        return (
          <nav {...spreadableProps}>
            <div className={styles.hamburgerMenu}>
              <span />
              <span />
              <span />
            </div>
            {/* {PAGES.map(p => {
              const renderedLink = <Link to={p.to}>{p.display}</Link>
              if (p.to === location.pathname) {
                return <mark>{renderedLink}</mark>
              } else {
                return renderedLink
              }
            })} */}
          </nav>
        )
      }}
    </Location>
  )
}
