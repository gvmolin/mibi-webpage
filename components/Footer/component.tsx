import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Fluid from "../Fluid/component";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faArrowDown } from "@fortawesome/free-solid-svg-icons";


export default function FooterComponent(){
    return (
        <>
            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    <div>
                        <h3>Contato</h3>
                        <div className={styles.icons}>
                            <p><FontAwesomeIcon icon={faEnvelope} style={{height:"3vh"}}></FontAwesomeIcon>&nbsp; mibi@mibi.com</p>
                            <p><FontAwesomeIcon icon={faPhone} style={{height:"3vh"}}></FontAwesomeIcon>&nbsp; {"(11)95959-3232"}</p>
                            <p>29.883.088/0001-19 - São Paulo</p>
                            <p>Ag. Mibi 2024 - Marca registrada</p>
                        </div>
                    </div>

                    <div style={{display:"flex", justifyContent:"flex-end", flexDirection:"column", alignItems:"center"}}>
                        <p>Passe o cursor na área abaixo:</p>
                        <p><FontAwesomeIcon icon={faArrowDown} style={{height:"3vh"}}></FontAwesomeIcon></p>

                    </div>
                    
                </div>
                <Fluid style={{width:"100%", height:"20vh", borderRadius:"2vh 2vh 0 0", justifySelf:"flex-end"}}></Fluid>
        
            </div>
        </>
    )
}