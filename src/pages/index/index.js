import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Button from "../../components/button"
import styles from "./styles.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className={styles.statement}>
      Are you banking with
      <br />
      <em>
        Clean
        <br />
        Money?
      </em>
    </h1>
    <img
      className={styles.statementImage}
      alt="bad banks"
      src={require("./statement-image.png")}
    />
    <div className={styles.ctaContainer}>
      <Button>measure your impact</Button>
    </div>
  </Layout>
)

export default IndexPage
