import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Button from "../../components/button"
import styles from "./styles.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2 className={styles.statement}>
      Are you banking with
      <br />
      <em>
        Clean Money?
      </em>
    </h2>
    <img
      className={styles.statementImage}
      alt="bad banks"
      src={require("./statement-image.png")}
    />
    <div className={styles.ctaContainer}>
      <Link to="/divest">
      <Button>measure your impact</Button>
      </Link>
    </div>
    <div className={styles.ctaContainer}>
      <h6 className={styles.partnership}>
        IN PARTNERSHIP WITH
      </h6>
    </div>
    <div className={styles.ctaContainer}>
      <img
        className={styles.logoImage}
        alt="years project"
        src={require("./logo-years-white.png")}
      />
      <img
        className={styles.logoImage}
        alt="350.org"
        src={require("./logo-350-white.png")}
      />
    </div>

  </Layout>
)

export default IndexPage
