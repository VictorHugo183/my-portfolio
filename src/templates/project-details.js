import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import { details, html } from '../styles/project-details.module.css'

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, source, live } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className={details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        {live ? <a href={live} target="_blank" rel="noreferrer"><button>View Demo</button></a> : ""}
        {source ? <a href={source} target="_blank" rel="noreferrer"><button>View Code</button></a> : ""}
        <div className={html} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      live
      source
      stack
      title
    }
  }
}
`