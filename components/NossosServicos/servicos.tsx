import styles from "./style.module.css";
import GradientLineComponent from "../Details/gradientline";

export default function ServicosComponent (){
    const steps:{
        title:string,
        text:string
    }[] = [
        {
            title:"Branding",
            text:"Identidade visual, logotipo, cores, tipografia e entre outros elementos visuais."
        },
        {
            title:"Social Media",
            text:"Processo de criar, planejar, executar e monitorar estratégias e engajamento."
        },
        {
            title:"Mídia Paga",
            text:"Gerar leads, execução de campanhas com objetivo de aumentar as vendas."
        },
        {
            title:"Sistemas",
            text:"Criação de sistemas e interfaces para melhorar sua presença online."
        },
        {
            title:"E-mail marketing",
            text:"Envio de mensagens comerciais ou informativas para uma lista de contatos."
        },
    ]

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
            <hr />
                <div className={styles.stepsContainer}>
                    <div className={styles.stepsAbsolute}>
                        {
                            steps.map(step => (
                                <div className={styles.step}>
                                    <div className={styles.stepCircle} />
                                    <div className={styles.stepContent}>
                                        <h3>{step.title}</h3>
                                        <p>{step.text}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    ) 
}