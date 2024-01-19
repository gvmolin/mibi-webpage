import { useEffect, useState, useRef } from "react";
import styles from "./styles.module.css";
import IMask from 'imask';

export function Form() {

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        descricao: ''
    });
    const telefoneInputRef = useRef(null);

    useEffect(()=>{
        if(telefoneInputRef.current){
            IMask(telefoneInputRef.current, {mask: "(00) 00000-0000"})
        }
        
    }, [])

    useEffect(() => {
        console.log(formData);
        
    }, [formData])

    function handleInputChange(e:any){
        console.log(e);
        
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }



    return (
        <div className={styles.container}>

            <div className={styles.innerContainer}>
                <h1>Formulário:</h1>

                <div className={styles.formItem}>
                    <p>Nome</p>
                    <input type="text" onChange={handleInputChange} name="nome"/>
                </div>

                <div className={styles.formItem}>
                    <p>Email</p>
                    <input type="text" onChange={handleInputChange} name="email"/>
                </div>

                <div className={styles.formItem}>
                    <p>Telefone {"(opcional)"}</p>
                    <input type="text" onChange={handleInputChange} ref={telefoneInputRef} name="telefone"/>
                    
                </div>
                <div className={ `${styles.formItem} ${styles.description}`}>
                    <p>Descrição {"(opcional)"}</p>
                    <textarea name="descricao" onChange={handleInputChange} />
                </div>

                <div className={styles.buttonContainer}>
                    <button>Comece agora!</button>
                </div>
                
            </div>



        </div>
    )
}