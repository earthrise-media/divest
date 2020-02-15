import React from "react"

import styles from "./styles.module.css"

export default ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>
}
