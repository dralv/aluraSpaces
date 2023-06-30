import Cabecalho from "../../Components/Cabecalho";
import Menu from "../../Components/Menu"
import styles from "./PaginaInicial.module.scss"
import Banner from "../../Components/Banner";
import Footer from "../../Components/Footer";
import Galeria from "../../Components/Galeria";
import Populares from "../../Components/Populares";

export default function PaginaInicial(){

  return(
    <>
      <Cabecalho></Cabecalho>
      <main>
        <section className={styles.principal}>
          <Menu></Menu>
          <Banner></Banner>
        </section>
      <div className={styles.galeria}>
        <Galeria></Galeria>
        <Populares></Populares>
      </div>
      </main>
      <Footer></Footer>
    </>
  );
}