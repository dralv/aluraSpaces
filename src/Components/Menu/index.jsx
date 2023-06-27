import React from 'react'
import home from '../../assets/icones/home-ativo.png'
import maisCurtidas from '../../assets/icones/mais-curtidas.png'
import maisVistas from '../../assets/icones/mais-vistas.png'
import novas from '../../assets/icones/novas-inativo.png'
import surpreendaMe from '../../assets/icones/surpreenda-me.png'
import styles from './Menu.module.scss'

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        <li className={styles.menu__item}>
          <img src={home} alt='Voltar para página inicial'></img>
          <a href='/'>Inicio</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisCurtidas}></img>
          <a href='/'>Mais curtidas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisVistas}></img>
          <a href='/'>Mais Vistas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={novas}></img>
          <a href='/'>Novas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={surpreendaMe}></img>
          <a href='/'>Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  )
}
