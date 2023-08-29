import styles from "./style.module.css";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBullhorn, faGear, faPenNib } from "@fortawesome/free-solid-svg-icons";

export default function HeaderComponent() {
  const squares:{
    text:string,
    icon:IconProp
  }[] = [
    {
      text:"Mais Resultados",
      icon: faBullhorn,
    },
    {
      text:"Mais Estratégia",
      icon:faGear,
    },
    {
      text:"Mais Design",
      icon:faPenNib,
    },
  ]

  return (
    <div className={styles.container}>

      <div>
        <section>
          <h1 className={styles.logo}>
            <img src="/images/logo.png"></img>
          </h1>
        </section>

        <section>
          <h2>Geramos soluções que mudam a perspectiva do seu negócio.</h2>
        </section>
        
        <section>
          <p>
             Usamos nossa 
            <span style={{color:"#E563DF"}}> criatividade </span> 
            e 
            <span style={{color:"#046855"}}> pensamento estratégico </span>
            para elevar a sua empresa a um próximo nível!
          </p>
        </section>
        
        <section>
          <div className={styles.icons}>

          
            {
              squares.map(square => {
                return (
                  <div className={styles.icon}>
                    <div className={styles.iconSquare}>
                      <FontAwesomeIcon icon={square.icon} style={{height:"5vh"}}/>
                    </div>
                    <p>{square.text}</p>
                  </div>
                )
              })
            }

          </div>
        </section>

      </div>
    </div>
    
    
  )
}
