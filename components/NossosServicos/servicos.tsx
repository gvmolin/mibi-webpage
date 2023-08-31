import styles from "./style.module.css";
import GradientLineComponent from "../Details/gradientline";

export default function ServicosComponent (){
    return (
        <div className={styles.container}>
            <section className={styles.sectionOne}>
                <div>
                    

                </div>
                <div style={{width:"40%"}}>
                    <GradientLineComponent />
                    <h2>Nossos Serviços</h2>
                    <p>Principais serviços que oferecemos para nossos clientes:</p>
                </div>

            </section>
            <section className={styles.sectionTwo}>
                <div className={styles.stepsContainer}>
                    <hr />

                </div>
            </section>
        </div>
    ) 
}