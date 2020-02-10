import React from "react"

import styles from "./styles.module.css"

export default ({ text, children, ...spreadableProps }) => {
  return (
    <button {...spreadableProps} className={styles.button}>
      {text || children}
    </button>
  )
}
