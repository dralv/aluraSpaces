import React from 'react'
import facebook from './facebook.svg'
import insta from './instagram.svg'
import twitter from './twitter.svg'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__icones}>
        <img src={facebook}></img>
        <img src={insta}></img>
        <img src={twitter}></img>
      </div>
      <div >
        <p className={styles.footer__creditos}>Desenvolvido por Álvaro Araújo</p>
      </div>
    </footer>
  )
}
