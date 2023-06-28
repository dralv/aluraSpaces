import React from 'react'
import banner from './banner.png'
import styles from "../../Pages/PaginaInicial/PaginaInicial.module.scss"
export default function Banner() {
  return (
    <div className={styles.principal__imagem}>
      <h1>A galeria mais completa do espaço</h1>
      <img src={banner} alt="Imagem da terra vista do espaço"></img>
    </div>
    
     
    
  )
}
