import RootLayout from '../layout';
import HeaderComponent from '@/components/Header/header';
import CardComponent from '@/components/Card/card';
import ServicosComponent from '@/components/NossosServicos/servicos';
import ParaQuemComponent from '@/components/ParaQuem/component';
import styles from "./styles.module.css";
import { readCarouselFiles } from "@/public/utils/utils";


export default function TestePage() {
  const carouselFiles = readCarouselFiles();

  return (
    <RootLayout>
      <div className={styles.scrollSnapContainer}>

        <div className={styles.snapPoint}>
          <HeaderComponent></HeaderComponent >
        </div>

        <div className={styles.snapPoint}>
          <CardComponent></CardComponent>
        </div>

        <div className={styles.finalSnapPoint}>
          <ServicosComponent></ServicosComponent>
          <ParaQuemComponent files={carouselFiles}></ParaQuemComponent>
          <div style={{height:"200vh"}}></div>
        </div>
      </div>
    </RootLayout>
    
  )
}
