import React from 'react'
import styles from './Menu.module.scss'
import icones from '../Icone/icones.json';
import Icone from '../Icone'

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        {icones.map(icone=>{
          return(
            <Icone icone={icone} style={styles}  key={icone.id}></Icone>
          )
        })}
      </ul>
    </nav>
  )
}
