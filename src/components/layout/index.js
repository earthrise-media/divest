import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "typeface-roboto-mono"

import Header from "../header"
import "./normalize.css"
import "./skeleton.css"
import "./styles.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="contentContainer">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="content">{children}</div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
