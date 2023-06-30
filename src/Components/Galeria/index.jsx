import React from 'react'
import Tags from '../Tags'
import styles from '../Galeria/Galeria.module.scss'
import fotos from './fotos.json'
import open from './open.png'
import favorito from './favorito.png'


export default function Galeria() {
  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags></Tags>
      <ul className={styles.galeria__cards}>
        {fotos.map((foto)=>{
          return(
            <li key={foto.id} className={styles.galeria__card}>
              <img className={styles.galeria__imagem} src={foto.imagem} alt={foto.titulo}/>
              <p className={styles.galeria__descricao}>{foto.titulo}</p>
              <div>
                <p>{foto.creditos}</p>
                <span>
                  <img src={favorito} alt='ícone de curtir'></img>
                  <img src={open} alt='ícone de abrir modal'></img>
                </span>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
