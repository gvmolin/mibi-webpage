import RootLayout from '../layout';
import HeaderComponent from '@/components/Header/header';
import CardComponent from '@/components/Card/card';
import ServicosComponent from '@/components/NossosServicos/servicos';
import ParaQuemComponent from '@/components/ParaQuem/component';
import styles from "./styles.module.css";
import { readCarouselFiles } from "@/public/utils/utils";
import Fluid from "@/components/Fluid/component"



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

        <div className={styles.snapPoint}>
          <ServicosComponent></ServicosComponent>
          
        </div>

        <footer className={styles.finalSnapPoint}>
          <ParaQuemComponent files={carouselFiles}></ParaQuemComponent>
          <div style={{height:"30vh"}}></div>
          <div style={{background: "rgb(25, 25, 25)", height:"40vh", borderRadius:"2vh", display: "flex", alignItems: "flex-end"}}>
            
            <Fluid style={{width:"100%", height:"20vh", borderRadius:"2vh 2vh 0 0"}}></Fluid>

          </div>
        </footer>
        
      </div>
    </RootLayout>
    
  )
}
