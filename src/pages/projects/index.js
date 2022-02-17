import React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from '../../components/Layout'
import {portfolio, projectStyle, thumbnail, imageWrapper, content, footer, buttonsContainer} from '../../styles/projects.module.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


export default function Projects({ data }){
  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've created</h3>
        <div className={projectStyle}>
          {projects.map(project => (
          <div key={project.id}>
            <h3>{project.frontmatter.title}</h3>
            <p>{project.frontmatter.stack}</p>
            <div className={buttonsContainer}>
              {project.frontmatter.live ? <a href={project.frontmatter.live} target="_blank"><button>View Demo</button></a> : ""}
              {project.frontmatter.source ? <a href={project.frontmatter.source} target="_blank"><button>View Code</button></a> : ""}
            </div>
            <Link 
            to={"/projects/" + project.frontmatter.slug} 
            >
            <div>
              <div className={imageWrapper}>
                <GatsbyImage image={getImage(project.frontmatter.thumb)} alt="Banner" className={thumbnail} quality={100}/>
                <div className={content}>{project.frontmatter.description}
                    <div className={footer}>(click for more info)</div>
                </div>
              </div>
            </div>
            </Link>
          </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
/* export page query */

export const query = graphql`
  query ProjectsPage {
  allMarkdownRemark(sort: {fields: frontmatter___priority, order: ASC}) {
      nodes {
        frontmatter {
          source
          live
          slug
          stack
          title
          description
          thumb {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                formats:[AUTO, WEBP]
              )
            }
          }
        }
        id
      }
    }
  }
`