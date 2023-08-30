import RootLayout from '../layout';
import HeaderComponent from '@/components/Header/header';
import CardComponent from '@/components/Card/card';
import styles from "./styles.module.css";

export default function TestePage() {
  return (
    <RootLayout>
      
      {/* <h1>hahahah</h1> */}
      <div className={styles.scrollSnapContainer}>

        <div className={styles.snapPoint}>
          <HeaderComponent></HeaderComponent >
        </div>

        <div className={styles.snapPoint}>
          <CardComponent></CardComponent>
        </div>

        <div className={styles.finalSnapPoint}>
          <div style={{height:"200vh"}}></div>
        </div>


        
        

      </div>
    </RootLayout>
    
  )
}
