import RootLayout from '../layout'
import HeaderComponent from '@/components/Header/header'
import styles from "./styles.module.css"

export default function TestePage() {
  return (
    <RootLayout>
      
      {/* <h1>hahahah</h1> */}
      <div className={styles.container}>
        <HeaderComponent></HeaderComponent>
      </div>
    </RootLayout>
    
  )
}
