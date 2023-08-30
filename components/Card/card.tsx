import styles from "./style.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"

export default function CardComponent() {
	return (
		<div className={styles.container}>
			<div className={styles.circleContainer}>
				<div className={styles.circle}>
					<FontAwesomeIcon
						icon={faArrowDown}
						style={{
							height: "50%"
						}}
					/>
				</div>
			</div>

			<div className={styles.content}>

				<div className={styles.contentBox} style={{justifyContent:"space-between"}}>
					<div style={{height:"60vh"}}></div>
					<h2>
						Por que seu negócio precisa do <span style={{fontWeight:"600", color:"#046855"}}>Marketing Digital?</span>
					</h2>
					<div>
						<img src="/images/maos-2.png" alt="" />
					</div>
				</div>

				<div className={styles.contentBox}>
					<p>
						Com as estratégias certas, é possível rastrear e medir os resultados de suas campanhas com grande precisão. Isso significa que você pode entender melhor o desempenho das suas estratégias e fazer ajustes em tempo real para melhorar os resultados. É necessário investir tempo e recursos para desenvolver uma estratégia eficaz que atinja seus objetivos de negócios.
					</p>
					<p style={{fontWeight:800, marginTop:"2vh"}}>
						E a Mibi pode fazer isso por você.
					</p>
				</div>

			</div>


		</div>
	)
}