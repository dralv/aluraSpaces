import Cabecalho from "../../Components/Cabecalho";
import Menu from "../../Components/Menu"
import styles from "./PaginaInicial.module.scss"
import Banner from "../../Components/Banner";
import Footer from "../../Components/Footer";
import Galeria from "../../Components/Galeria";

export default function PaginaInicial(){

  return(
    <>
      <Cabecalho></Cabecalho>
      <main>
        <section className={styles.principal}>
          <Menu></Menu>
          <Banner></Banner>
        </section>
      </main>
      <div className={styles.galeria}>
        <Galeria></Galeria>
      </div>
      <Footer></Footer>
    </>
  );
}