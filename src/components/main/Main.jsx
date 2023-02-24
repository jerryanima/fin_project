
import css from './Main.module.css'
import MainImg1 from '../../assets/main/main-1.svg'
import MainImg2 from '../../assets/main/main-2.svg'
import TariffBlock from '../TariffBlock/TariffBlock'
import Slider from '../slider/Slider'

const Main = props => {
	return (
		<main className={css.main} >
			<section className={css.infoBlock}>
				<div>
					<h1 className={css.title}>сервис по поиску публикаций о компании по его ИНН</h1>
					<p className={css.info}>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
					<button className='button'>Запросить данные</button>
				</div>
				<div>
					<img src={MainImg1} alt='человек'/>
				</div>
			</section>
			<section className={css.carousel}>
				<h2 className={css.titleH2}>Почему именно мы</h2>
				<Slider/>
				<img className={css.imgMan} src={MainImg2} alt='человек с галочкой'></img>
			</section>
			<section className={css.tariff}>
				<h2 className={css.titleH2}>наши тарифы</h2>
				<TariffBlock/>
			</section>
		</main>
	)
}

export default Main
