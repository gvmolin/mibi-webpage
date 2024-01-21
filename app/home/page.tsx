import RootLayout from '../layout';
import HeaderComponent from '@/components/Header/header';
import CardComponent from '@/components/Card/card';
import ServicosComponent from '@/components/NossosServicos/servicos';
import ParaQuemComponent from '@/components/ParaQuem/component';
import styles from "./styles.module.css";
import { readCarouselFiles } from "@/public/utils/utils";
import FooterComponent from '@/components/Footer/component';



export default function TestePage() {
  const carouselFiles = readCarouselFiles();

  return (
    <RootLayout>
      <div className={styles.scrollSnapContainer}>

        <main>
          <section className={styles.snapPoint}>
            <HeaderComponent></HeaderComponent >
          </section>

          <section className={styles.snapPoint}>
            <CardComponent></CardComponent>
          </section>

          <section className={styles.snapPoint}>
            <ServicosComponent></ServicosComponent>

          </section>

          <section className={styles.snapPoint} style={{height:"fit-content"}}>
            <ParaQuemComponent files={carouselFiles}></ParaQuemComponent>
          </section>

        </main>
        

        <footer className={styles.finalSnapPoint}>
          <FooterComponent></FooterComponent>
        </footer>
        
      </div>
    </RootLayout>
    
  )
}
