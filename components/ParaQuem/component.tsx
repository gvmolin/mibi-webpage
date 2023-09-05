'use client'

import GradientLineComponent from "../Details/gradientline";
import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Controller } from "swiper/modules";
import { useState, useEffect } from "react";
import { Thumbs } from 'swiper/modules';

export default function ParaQuemComponent(
	props:{
		files:string[]
	}
) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const cards: {
		title: string,
		text: string
	}[] = [
			{
				title: "Empresas",
				text: "Empresas que querem aumentar suas vendas, visibilidade e engajamento na internet."
			},
			{
				title: "Empreendedores",
				text: "Empresários que visam escalar suas vendas e se destacar no mercado digital."
			},
			{
				title: "Influencers",
				text: "Influenciadores digitais que desejam aumentar sua presença digital."
			},
		]

	useEffect(()=>{
		console.log(props.files.sort((a:string, b:string) => filenameToNumber(a) -  filenameToNumber(b)))
	}, [])

	function filenameToNumber(str:string):number{
		const splitted = str.split(".")
		return parseInt(splitted[0])
	}

	
	return (
		<div className={styles.container}>
			<GradientLineComponent />
			<h1>Para quem é nosso serviço?</h1>

			<div className={styles.cardsContainer}>
				{
					cards.map((card, i) => (
						<div className={styles.card} key={i*17}>
							<h1>{card.title}</h1>
							<p>{card.text}</p>
						</div>
					))
				}
			</div>
			
			<div className={styles.swipeContainer}>
				<h1>Portifolio</h1>
				<Swiper
					modules={[Thumbs]}
					thumbs={{ swiper: thumbsSwiper }}

					// controller={{ control: controlledSwiper }}
					className={styles.swiper}
					spaceBetween={50}
					slidesPerView={3}
					onSlideChange={(e) => console.log(e)}
					onSwiper={(swiper) => console.log(swiper)}
				>

					{
						props.files
							.sort((a:string, b:string) => filenameToNumber(a) -  filenameToNumber(b))
							.map((file, i) => (
								<SwiperSlide key={i*19}><img src={'/images/carousel/' + file} /></SwiperSlide>
							))
					}

				</Swiper>

			</div>




		</div>
	);
}