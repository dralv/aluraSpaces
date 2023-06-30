import React from 'react'
import facebook from './facebook.svg'
import insta from './instagram.svg'
import twitter from './twitter.svg'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__icones}>
        <a href='./'>
          <img src={facebook}></img>
        </a>
        <a href='./'>
          <img src={insta}></img>
        </a>
        <a href='./'> 
          <img src={twitter}></img>
        </a>
      </div>
      <div >
        <p className={styles.footer__creditos}>Desenvolvido por Álvaro Araújo</p>
      </div>
    </footer>
  )
}
