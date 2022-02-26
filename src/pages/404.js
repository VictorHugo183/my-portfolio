import React from 'react'
import Layout from '../components/Layout'
import { container, header } from '../styles/404.module.css'

export default function NotFound() {
  return (
    <Layout>
      <div className={container}>
        <section className={header}>
          <div>
            <h2>404</h2>
            <h3>Page not found</h3>
          </div>
        </section>
      </div>
    </Layout>
  )
}