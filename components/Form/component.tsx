import styles from "./styles.module.css";

export function Form() {
    return (
        <div className={styles.container}>

            <div className={styles.innerContainer}>
                <h1>Formulário:</h1>

                <div className={styles.formItem}>
                    <p>Nome</p>
                    <input type="text" />
                </div>

                <div className={styles.formItem}>
                    <p>Email</p>
                    <input type="text" />
                </div>

                <div className={styles.formItem}>
                    <p>Telefone {"(opcional)"}</p>
                    <input type="text" />
                </div>

                <div className={ `${styles.formItem} ${styles.description}`}>
                    <p>Descrição {"(opcional)"}</p>
                    <input type="text" />
                </div>

            </div>



        </div>
    )
}