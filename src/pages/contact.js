import React from 'react'
import Layout from '../components/Layout'
import '../styles/global.css'
import { header, contacts, contact } from '../styles/contact.module.css'
import { GrMail } from 'react-icons/gr';
import { AiOutlineGithub } from 'react-icons/ai';
import { GrLinkedin } from 'react-icons/gr';

export default function Contact() {
  return (
    <Layout>
      <div className={header}>
        <h2>Get in touch with me:</h2>
      </div>
      <div className={contacts}>
        <div className={contact}>
          <a href="https://github.com/VictorHugo183" target="_blank" rel="noreferrer">
            <AiOutlineGithub />
            <p>Github</p>
          </a>
        </div>
        <div className={contact}>
          <a href="https://www.linkedin.com/in/victor-nascimento-870070171/" target="_blank" rel="noreferrer">
            <GrLinkedin />
            <p>LinkedIn</p>
          </a>
        </div>
        <div className={contact}>
          <a href="mailto:victorhugovaranda@hotmail.com" target="_blank" rel="noreferrer">
            <GrMail />
            <p>victorhugovaranda@hotmail.com</p>
          </a>
        </div>
      </div>
    </Layout>
  )
}