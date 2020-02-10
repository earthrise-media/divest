import React from "react"

import styles from "./styles.module.css"

export default () => (
  <h1 className={styles.logo}>
    Unfriend{" "}
    <span className={styles.cancelBox}>
      #FossilFinance
      <span className={styles.cancelIcon}></span>
    </span>
  </h1>
)
