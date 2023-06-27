import Cabecalho from "../../Components/Cabecalho";
import Menu from "../../Components/Menu"
import banner from './banner.png'
import styles from "./PaginaInicial.module.scss"

export default function PaginaInicial(){

  return(
    <>
      <Cabecalho></Cabecalho>
      <main>
        <section className={styles.principal}>
          <Menu></Menu>
          <div className={styles.principal__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="Imagem da terra vista do espaço"></img>
          </div>
        </section>

      </main>
    </>
  );
}