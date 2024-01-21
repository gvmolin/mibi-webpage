'use client'

import GradientLineComponent from "../Details/gradientline";
import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";
import { Form } from "../Form/component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBuilding, faPerson, faPalette } from "@fortawesome/free-solid-svg-icons";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ParaQuemComponent(
	props:{
		files:string[]
	}
) {
	const cards: {
		title: string,
		text: string,
		icon: IconProp,
	}[] = [
		{
			title: "Empresas",
			text: "Empresas que querem aumentar suas vendas, visibilidade e engajamento na internet.",
			icon: faBuilding as IconProp,
		},
		{
			title: "Empreendedores",
			text: "Empresários que visam escalar suas vendas e se destacar no mercado digital.",
			icon: faPerson as IconProp,
		},
		{
			title: "Influencers",
			text: "Influenciadores digitais que desejam aumentar sua presença digital.",
			icon: faPalette as IconProp,
		},
	]

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
							<p style={{fontSize:"5vh"}}><FontAwesomeIcon icon={card.icon}></FontAwesomeIcon></p>
							<h1>{card.title}</h1>
							<p>{card.text}</p>
						</div>
					))
				}
			</div>
			
			<div className={styles.swipeContainer}>
				<GradientLineComponent />
				<h1>Portifolio</h1>
				<Swiper
					modules={[Navigation, Pagination]}
					navigation
					pagination={{ clickable: true }}
					className={styles.swiper}
					spaceBetween={50}
					slidesPerView={3}
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
				
			<div style={{marginTop:"10vh"}}>
				<GradientLineComponent />
				<h1>Entre em contato</h1>
				<div className={styles.formContainer}>
					<Form />

					<div className={styles.formText}>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					</div>
				</div>

			</div>

		</div>
	);
}