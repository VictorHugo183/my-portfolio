import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/Layout'
import '../styles/global.css'
import {header, btn, container} from '../styles/home.module.css';

export default function Home({ data }) {/* destructure data we get from the graphql query */
  const {title, description } = data.site.siteMetadata
  return (
  <Layout>
    <div className={container}>
    <section className={header}>
      <div>
        <h2>Victor Nascimento</h2>
        <h3>Web Developer</h3>
        <div className={header}>
          <Link className={btn} to="/projects">
              View my projects
          </Link>
        </div>
      </div>
    </section>
    </div>
  </Layout>
  )
}

export const query = graphql`
query SiteInfo {
  site {
    siteMetadata {
      title
      description
    }
  }
}
`